// Vercel Serverless Function to submit form data to HubSpot
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      formId, // HubSpot form ID (different per form)
      fields, // Form field data
      context = {} // Optional: page context, UTM params, etc.
    } = req.body;

    // Validate required fields
    if (!formId || !fields) {
      return res.status(400).json({ error: 'Missing required fields: formId and fields' });
    }

    // Get HubSpot Portal ID and API key from environment variables
    const portalId = process.env.HUBSPOT_PORTAL_ID || '442333239';
    const apiKey = process.env.HUBSPOT_API_KEY;

    if (!apiKey) {
      console.error('HubSpot API key not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Prepare HubSpot form submission payload
    const hubspotPayload = {
      fields: Object.keys(fields).map(key => ({
        name: key,
        value: fields[key]
      })),
      context: {
        hutk: req.cookies?.hubspotutk, // HubSpot tracking cookie
        pageUri: context.pageUri || req.headers.referer,
        pageName: context.pageName || 'Form Submission',
        ipAddress: req.headers['x-forwarded-for'] || req.connection?.remoteAddress,
        ...context
      }
    };

    // Submit to HubSpot Forms API
    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const hubspotResponse = await fetch(hubspotUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(hubspotPayload)
    });

    const responseData = await hubspotResponse.json();

    if (!hubspotResponse.ok) {
      console.error('HubSpot API error:', responseData);
      return res.status(hubspotResponse.status).json({
        error: 'Failed to submit to HubSpot',
        details: responseData
      });
    }

    // Success
    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      hubspotResponse: responseData
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
