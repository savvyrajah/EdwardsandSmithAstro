import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      formId,
      fields,
      context = {}
    } = body;

    // Validate required fields
    if (!formId || !fields) {
      return new Response(JSON.stringify({
        error: 'Missing required fields: formId and fields'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get HubSpot Portal ID and API key from environment variables
    const portalId = import.meta.env.HUBSPOT_PORTAL_ID || '442333239';
    const apiKey = import.meta.env.HUBSPOT_API_KEY;

    if (!apiKey) {
      console.error('HubSpot API key not configured');
      return new Response(JSON.stringify({
        error: 'Server configuration error'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prepare HubSpot form submission payload
    const hubspotPayload = {
      fields: Object.keys(fields).map(key => ({
        name: key,
        value: fields[key]
      })),
      context: {
        pageUri: context.pageUri || request.headers.get('referer'),
        pageName: context.pageName || 'Form Submission',
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
      return new Response(JSON.stringify({
        error: 'Failed to submit to HubSpot',
        details: responseData
      }), {
        status: hubspotResponse.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Success
    return new Response(JSON.stringify({
      success: true,
      message: 'Form submitted successfully',
      hubspotResponse: responseData
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(JSON.stringify({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
