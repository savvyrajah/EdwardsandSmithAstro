const fs = require('fs');
const path = require('path');

// Property data from recent-purchases.astro
const brisbaneProperties = [
  {
    location: "Carina Heights, 4152",
    slug: "carina-heights-4152",
    image: "/assets/images/carina-heights-4152.jpg",
    story: "Purchased for a time-poor professional after a 12-month solo search.",
    subtitle: "Purchased for a time-poor professional after a 12-month solo search"
  },
  {
    location: "Carina, 4152",
    slug: "carina-4152",
    image: "/assets/images/carina-4152.jpg",
    story: "Our client came to us after spending some time searching for the perfect home. They were after something very specific…",
    subtitle: "Secured for client with very specific requirements after extensive searching"
  },
  {
    location: "Carina, 4152",
    slug: "carina-4152-2",
    image: "/assets/images/carina-4152-2.jpg",
    story: "We're thrilled to have assisted our wonderful clients referred to us through family friends…",
    subtitle: "Assisted wonderful clients referred through family friends"
  },
  {
    location: "Newmarket, 4051",
    slug: "newmarket-4051",
    image: "/assets/images/newmarket-4051.jpg",
    story: "Our clients initially came to us chasing the dream of a self-managed Airbnb.",
    subtitle: "Investment property secured after pivoting from self-managed Airbnb dream"
  },
  {
    location: "Bridgeman Downs, 4035",
    slug: "bridgeman-downs-4035",
    image: "/assets/images/bridgeman-downs-4035.jpg",
    story: "Our client came to us after spending some time searching for the perfect home. They were after something very specific…",
    subtitle: "Secured for client with specific family home requirements"
  },
  {
    location: "Windsor, 4030",
    slug: "windsor-4030",
    image: "/assets/images/windsor-4030.png",
    story: "We're beyond excited to have secured this stunning family home renovator for our lovely first-home buyer clients in the prime location of Windsor.",
    subtitle: "Stunning renovator secured for first-home buyers in prime Windsor location"
  },
  {
    location: "Clayfield, 4011",
    slug: "clayfield-4011",
    image: "/assets/images/clayfield-4011.png",
    story: "House hunting can be challenging when you're a pro athlete constantly on the move, but that's where we come in.",
    subtitle: "Secured for pro athlete constantly on the move"
  },
  {
    location: "Hemmant, 4174",
    slug: "hemmant-4174",
    image: "/assets/images/hemmant-4174.png",
    story: "Our wonderful owner-occupier clients have successfully secured their dream home—modern, perfectly located, and within their ideal school catchment.",
    subtitle: "Dream home secured within ideal school catchment for owner-occupiers"
  },
  {
    location: "Wakerley, 4154",
    slug: "wakerley-4154",
    image: "/assets/images/wakerley-4154.webp",
    story: "AFL Suns star, Ben King was able to secure this dazzling Gold Coast home with the help of Jake & Ely",
    subtitle: "Secured for AFL Suns star Ben King"
  },
  {
    location: "Eatons Hill, 4037",
    slug: "eatons-hill-4037",
    image: "/assets/images/eatons-hill-4037.webp",
    story: "They had a very clear timeline when it came to settling on their new home so we had to...",
    subtitle: "Secured within tight timeline for clients with clear settlement deadline"
  },
  {
    location: "Camp Hill, 4152",
    slug: "camp-hill-4152",
    image: "/assets/images/camp-hill-4152.webp",
    story: "Finding time to get out and hunt for his first home, Zac found it extremely hard to navigate...",
    subtitle: "First home secured for time-poor buyer navigating competitive market"
  },
  {
    location: "Caboolture, 4510",
    slug: "caboolture-4510",
    image: "/assets/images/caboolture-4510.png",
    story: "Our investor clients came to us with a clear goal: expand their portfolio and secure a home before Christmas.",
    subtitle: "Portfolio expansion secured before Christmas deadline for investors"
  },
  {
    location: "Griffin, 4503",
    slug: "griffin-4503",
    image: "/assets/images/griffin-4503.png",
    story: "First-time investors, take note! Our client was looking for their first investment property to meet key criteria.",
    subtitle: "First investment property secured meeting all key criteria"
  }
];

const goldCoastProperties = [
  {
    location: "Burleigh Waters, 4220",
    slug: "burleigh-waters-4220",
    image: "/assets/images/burleigh-waters-4220.jpg",
    story: "Not only did we secure this stunning family home in Burleigh within 2 weeks for our clients, but we also saved them over $100,000 with their budget.",
    subtitle: "Saved client over $100,000 within 2 weeks"
  },
  {
    location: "Burleigh Heads, 4220",
    slug: "burleigh-heads-4220",
    image: "/assets/images/burleigh-heads-4220-warehouse.jpg",
    story: "SMSF Warehouse in Burleigh Heads. We recently helped our client secure this blue chip investment",
    subtitle: "SMSF blue chip warehouse investment secured"
  },
  {
    location: "Burleigh Waters, 4220",
    slug: "burleigh-waters-4220-2",
    image: "/assets/images/burleigh-waters-4220-2.png",
    story: "Since recently moving to the Gold Coast from New Zealand, our rugby fan clients engaged us to help them secure their dream coastal home.",
    subtitle: "Dream coastal home secured for clients relocating from New Zealand"
  },
  {
    location: "Burleigh Heads, 4220",
    slug: "burleigh-heads-4220-3",
    image: "/assets/images/burleigh-heads-4220-3.webp",
    story: "Kerry & Shane had been looking for almost 12 months for the right investment property...",
    subtitle: "Investment property secured after 12-month search"
  },
  {
    location: "Burleigh Heads, 4220",
    slug: "burleigh-heads-4220-4",
    image: "/assets/images/burleigh-heads-4220-4.webp",
    story: "AFL Suns star, Ben King was able to secure this dazzling Gold Coast home with the help of Jake & Ely",
    subtitle: "Secured for AFL Suns star Ben King"
  },
  {
    location: "Maudsland, 4210",
    slug: "maudsland-4210",
    image: "/assets/images/maudsland-4210.jpg",
    story: "Becoming vastly popular with young families is this upcoming suburb of Maudsland that offers an acreage lifestyle but located within 30 minutes to Gold Coast beaches.",
    subtitle: "Acreage lifestyle secured 30 minutes from beaches"
  },
  {
    location: "Palm Beach, 4221",
    slug: "palm-beach-4221",
    image: "/assets/images/palm-beach-4221-new.jpg",
    story: "Our client came to us after spending some time searching for the perfect home. They were after something very specific…",
    subtitle: "Secured for our client seeking the perfect coastal lifestyle property"
  },
  {
    location: "Palm Beach, 4221",
    slug: "palm-beach-4221-2",
    image: "/assets/images/palm-beach-4221-2.webp",
    story: "With Jess & Alex spending a lot of their working time over in Los Angeles, they wanted to finally...",
    subtitle: "Secured for clients spending time in Los Angeles"
  },
  {
    location: "Hope Island, 4212",
    slug: "hope-island-4212",
    image: "/assets/images/hope-island-4212.jpg",
    story: "Our client came to us exhausted after months of searching for the perfect apartment.",
    subtitle: "Perfect apartment secured for exhausted buyer after months of searching"
  },
  {
    location: "Currumbin Waters, 4223",
    slug: "currumbin-waters-4223",
    image: "/assets/images/currumbin-waters-4223.jpg",
    story: "A huge congratulations to our wonderful clients, Trent & Skye, on the successful purchase of their new Gold Coast home…",
    subtitle: "New Gold Coast home secured for wonderful clients Trent & Skye"
  },
  {
    location: "Mermaid Waters, 4218",
    slug: "mermaid-waters-4218",
    image: "/assets/images/mermaid-waters-4218.png",
    story: "We recently secured a prime corner block in the highly sought-after suburb of Mermaid Waters on the Gold Coast for our developer clients.",
    subtitle: "Prime corner block secured for developer clients"
  },
  {
    location: "Robina, 4226",
    slug: "robina-4226",
    image: "/assets/images/robina-4226.png",
    story: "We recently assisted an NRL star in securing an investment property on the Gold Coast, located in the thriving suburb of Robina.",
    subtitle: "Investment property secured for NRL star"
  },
  {
    location: "Broadbeach, 4218",
    slug: "broadbeach-4218",
    image: "/assets/images/broadbeach-4218-2.webp",
    story: "We secured this prime property in the coveted Broadbeach Waters on the Gold Coast",
    subtitle: "Prime property secured in coveted Broadbeach Waters"
  },
  {
    location: "Upper Coomera, 4209",
    slug: "upper-coomera-4209",
    image: "/assets/images/upper-coomera-4209.webp",
    story: "After making the move north for work, Chance and Alaina now wanted to call...",
    subtitle: "Secured for clients relocating north for work"
  }
];

const otherProperties = [
  {
    location: "Rasmussen, 4815",
    slug: "rasmussen-4815",
    image: "/assets/images/rasmussen-4815.jpg",
    story: "Our clients Josh & Savannah came to us excited to start their property investment journey. Within only 3 weeks…",
    subtitle: "Investment journey started successfully within 3 weeks"
  },
  {
    location: "Kingscliff, NSW 2487",
    slug: "kingscliff-2487",
    image: "/assets/images/kingscliff-2487-2.png",
    story: "Another SMSF investment success for our Sydney clients!",
    subtitle: "SMSF investment success for Sydney clients"
  }
];

// Template function
function generatePropertyPage(property, region) {
  const [suburb, postcode] = property.location.split(', ');
  const regionName = region === 'brisbane' ? 'Brisbane' : region === 'gold-coast' ? 'Gold Coast' : 'Other';
  const regionSlug = region === 'brisbane' ? 'brisbane' : region === 'gold-coast' ? 'gold-coast' : 'other';

  return `---
import Layout from '../../../layouts/Layout.astro';
import Header from '../../../components/Header.astro';
import Footer from '../../../components/Footer.astro';
---

<Layout
  title="${suburb} Property Purchase | Edwards & Smith Success Story"
  description="See how Edwards & Smith secured this ${suburb} property. ${property.story}"
>
  <Header />
  <main>
    <!-- Hero Section -->
    <section class="property-hero section">
      <div class="hero-image">
        <img src="${property.image}" alt="${suburb} ${postcode} property purchased by Edwards & Smith" />
      </div>
      <div class="container">
        <div class="breadcrumb">
          <a href="/">Home</a> / <a href="/recent-purchases">Recent Purchases</a> / <a href="/${regionSlug}/recent-purchases">${regionName}</a> / <span>${suburb}</span>
        </div>
        <h1>${suburb}, ${postcode} - ${regionName}</h1>
        <p class="property-subtitle">${property.subtitle}</p>
      </div>
    </section>

    <!-- Property Overview -->
    <section class="property-overview section">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-main">
            <h2>The Success Story</h2>
            <p class="lead-text">
              ${property.story}
            </p>

            <h3>What We Did</h3>
            <ul class="success-points">
              <li>Conducted comprehensive market analysis of ${suburb} property trends</li>
              <li>Identified properties matching client requirements and budget</li>
              <li>Performed detailed due diligence on property condition and market values</li>
              <li>Negotiated strategic purchase on behalf of our client</li>
              <li>Managed the entire settlement process for a smooth transaction</li>
            </ul>

            <h3>Why ${suburb}?</h3>
            <p>
              ${suburb} represents an excellent choice for property buyers seeking quality lifestyle and strong investment fundamentals. Our client chose this location for its unique combination of amenities, community, and growth potential.
            </p>
          </div>

          <div class="overview-sidebar">
            <div class="property-card">
              <h3>Property Details</h3>
              <div class="detail-item">
                <span class="label">Location:</span>
                <span class="value">${suburb}, ${postcode.includes('NSW') ? 'NSW' : 'QLD'} ${postcode.replace('NSW ', '')}</span>
              </div>
              <div class="detail-item">
                <span class="label">Region:</span>
                <span class="value">${regionName}</span>
              </div>
              <div class="detail-item">
                <span class="label">Service Type:</span>
                <span class="value">Full Buyers Agent Service</span>
              </div>
            </div>

            <div class="cta-card">
              <h4>Looking to Buy ${region === 'other' ? 'Regional' : 'in ' + regionName}?</h4>
              <p>Let us help you secure your dream property like we did for this client.</p>
              <a href="/book-free-consultation" class="button-primary">Book Free Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="cta-section section">
      <div class="container">
        <h2>Ready to Find Your Dream Property?</h2>
        <p>Let us help you secure your next home or investment property</p>
        <a href="/book-free-consultation" class="button-primary">Book Free Consultation</a>
      </div>
    </section>
  </main>
  <Footer />
</Layout>

<style>
  .property-hero {
    background-color: #f9f9f9;
    padding-top: 0;
  }

  .hero-image {
    width: 100%;
    height: 400px;
    overflow: hidden;
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .property-hero .container {
    padding-top: 30px;
  }

  .breadcrumb {
    font-size: 14px;
    color: var(--text-light);
    margin-bottom: 15px;
  }

  .breadcrumb a {
    color: var(--primary-green);
    text-decoration: none;
  }

  .breadcrumb a:hover {
    text-decoration: underline;
  }

  .property-hero h1 {
    margin-bottom: 10px;
  }

  .property-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    font-family: var(--font-heading);
  }

  .property-overview {
    background-color: var(--white);
  }

  .overview-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 50px;
  }

  .lead-text {
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 30px;
    color: var(--text-primary);
  }

  .overview-main h2 {
    color: var(--primary-green);
    margin-bottom: 20px;
  }

  .overview-main h3 {
    color: var(--primary-green);
    margin-top: 30px;
    margin-bottom: 15px;
  }

  .success-points {
    list-style: none;
    margin: 20px 0;
  }

  .success-points li {
    padding: 12px 0 12px 30px;
    position: relative;
    line-height: 1.6;
  }

  .success-points li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary-green);
    font-weight: bold;
    font-size: 18px;
  }

  .overview-sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .property-card {
    background-color: #f9f9f9;
    padding: 25px;
    border-radius: 8px;
    border-left: 4px solid var(--primary-green);
  }

  .property-card h3 {
    color: var(--primary-green);
    margin-bottom: 20px;
  }

  .detail-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .detail-item:last-child {
    border-bottom: none;
  }

  .detail-item .label {
    font-weight: 600;
    color: var(--text-secondary);
  }

  .detail-item .value {
    color: var(--text-primary);
  }

  .cta-card {
    background-color: var(--primary-green);
    color: var(--white);
    padding: 25px;
    border-radius: 8px;
    text-align: center;
  }

  .cta-card h4 {
    color: var(--white);
    margin-bottom: 10px;
  }

  .cta-card p {
    margin-bottom: 20px;
    font-size: 14px;
  }

  .cta-section {
    background-color: var(--primary-green);
    color: var(--white);
    text-align: center;
  }

  .cta-section h2 {
    color: var(--white);
    margin-bottom: 15px;
  }

  .cta-section p {
    margin-bottom: 25px;
    font-size: var(--body-large);
  }

  @media (max-width: 1024px) {
    .overview-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .hero-image {
      height: 250px;
    }
  }
</style>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "${suburb} Property Purchase",
  "url": "https://www.edwardsandsmith.com.au/recent-purchases/${regionSlug}/${property.slug}",
  "description": "${property.story}",
  "image": "https://www.edwardsandsmith.com.au${property.image}",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "${suburb}",
    "addressRegion": "${postcode.includes('NSW') ? 'NSW' : 'QLD'}",
    "postalCode": "${postcode.replace('NSW ', '')}",
    "addressCountry": "AU"
  },
  "provider": {
    "@type": "RealEstateAgent",
    "name": "Edwards & Smith Buyers Agents",
    "url": "https://www.edwardsandsmith.com.au"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.edwardsandsmith.com.au"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Recent Purchases",
      "item": "https://www.edwardsandsmith.com.au/recent-purchases"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "${regionName}",
      "item": "https://www.edwardsandsmith.com.au/${regionSlug}/recent-purchases"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "${suburb} ${postcode.replace('NSW ', '')}",
      "item": "https://www.edwardsandsmith.com.au/recent-purchases/${regionSlug}/${property.slug}"
    }
  ]
}
</script>
`;
}

// Generate all files
const basePath = path.join(__dirname, 'src/pages/recent-purchases');

// Skip already created files
const skipFiles = ['carina-heights-4152', 'carina-4152', 'newmarket-4051'];

// Brisbane properties
brisbaneProperties.forEach(property => {
  if (skipFiles.includes(property.slug)) return;

  const filePath = path.join(basePath, 'brisbane', `${property.slug}.astro`);
  const content = generatePropertyPage(property, 'brisbane');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
});

// Gold Coast properties
goldCoastProperties.forEach(property => {
  // Skip palm-beach-4221 as it was already created as a sample
  if (property.slug === 'palm-beach-4221') return;

  const filePath = path.join(basePath, 'gold-coast', `${property.slug}.astro`);
  const content = generatePropertyPage(property, 'gold-coast');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
});

// Other properties
otherProperties.forEach(property => {
  const filePath = path.join(basePath, 'other', `${property.slug}.astro`);
  const content = generatePropertyPage(property, 'other');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
});

console.log('\n✅ All property pages generated successfully!');
