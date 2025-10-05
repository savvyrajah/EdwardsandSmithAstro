# Edwards & Smith Astro Migration & AEO Optimization Plan

## Executive Summary

This plan outlines the complete migration of edwardsandsmith.com.au from WordPress to Astro, with a focus on Answer Engine Optimization (AEO), page speed, and strategic content expansion to capture high-intent search traffic in Brisbane, Gold Coast, and Bali markets.

### Target Market
- **Price Range:** $1.5M - $3M buyers
- **Primary Audience:** Owner-occupiers and families looking to buy to live or for holidays
- **Secondary Audience:** Investors

### Why Clients Choose Edwards & Smith
1. Interstate buyers who don't know the market
2. Professional couples who don't have time to search
3. Buyers who've been looking for months and keep missing out

---

## Phase 1: Foundation & Setup

### Important Data Sources

**Google Reviews:** ✅ Available
- Source: Edwards and Smith Buyers Agents Google Business Profile
- Reviews showcase client success stories, speed to purchase, savings, and satisfaction
- Must be integrated throughout the site (homepage, service pages, agent pages)
- Use schema markup for reviews to enhance SEO

**Design Reference:** ✅ Current WordPress site
- **Visual Style:** Maintain the same look and feel
  - White background (#FFFFFF)
  - Primary brand colors: #5A5B54 (green-gray), #898B7A (olive)
  - Belleza font family
  - Minimalist, professional aesthetic
- **Structural Changes:** Make improvements for SEO/AEO/trust/credibility
  - Split single services page into 3 separate pages (better SEO targeting)
  - Add comprehensive footer with internal linking (drives traffic)
  - Optimize page structure for answer engines
  - Add trust signals (testimonials, reviews, credentials)
- **Technical Improvements:** Mobile responsiveness, performance, Core Web Vitals

**Deployment:** ✅ Vercel confirmed

**Off-Market Properties (Gold Coast):** ✅ Available
- 6 off-market properties ready for display
- Display format: Frosted/blurred images, suburb only (no exact address), bed/bath/car, expected price
- Creates urgency and intrigue while protecting seller privacy

### 1.0 Repository Cleanup
**Objective:** Clean up GitHub repository and remove unused files

**Status:** ✅ Ready to execute

**Actions:**
- Audit existing WordPress files and dependencies
- Remove unused themes, plugins, and assets
- Archive old code that won't be migrated
- Set up clean directory structure for Astro project
- Document what's being kept vs. removed
- Keep only essential files for migration reference

### 1.1 Astro Project Architecture
**Objective:** Set up a high-performance Astro project with optimal configuration

**Actions:**
- Initialize Astro project with TypeScript support
- Configure Astro for SSG (Static Site Generation) for maximum speed
- **CRITICAL: Configure NO trailing slashes** (trailingSlash: 'never')
- Set up TailwindCSS for styling consistency
- **Icon Library:** Lucide Icons (clean, professional, no emojis)
  - Consistent with professional brand aesthetic
  - Wide selection for services, locations, features
  - Tree-shakeable for performance
- Configure image optimization (Sharp/Astro Assets)
- Set up content collections for properties, team members, suburbs, and blog posts
- Configure sitemap generation and robots.txt (no trailing slashes)
- Set up environment variables for API integrations
- Configure 301 redirects from trailing slash URLs to non-trailing

**Astro Configuration (astro.config.mjs):**
```js
export default defineConfig({
  trailingSlash: 'never', // No trailing slashes
  build: {
    format: 'file' // Generates /page.html instead of /page/index.html
  }
})
```

**Technical Requirements:**
- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Lighthouse score > 95 for all pages
- Automatic WebP/AVIF image generation with fallbacks
- All internal links without trailing slashes
- All canonical tags without trailing slashes
- Sitemap URLs without trailing slashes

### 1.2 Design System Migration
**Objective:** Replicate current design while improving for mobile and performance

**Actions:**
- Extract color palette, typography, and spacing from WordPress site
  - White background (#FFFFFF)
  - Primary: #5A5B54 (green-gray), #898B7A (olive)
  - Belleza font family
- Create reusable Astro components (Header, Footer, CTA blocks, etc.)
- Implement responsive breakpoints (mobile-first approach)
- Ensure 44px minimum touch targets for mobile
- Maintain brand consistency

### 1.3 Comprehensive Footer Design
**Objective:** Drive internal traffic and improve SEO with strategic footer

**Footer Structure (5 columns on desktop, stacked on mobile):**

**Column 1: Services**
- Full Buyers Agent Service
- Property Evaluation & Negotiation
- Auction Bidding Representation
- Off-Market Properties

**Column 2: Locations**
- Buyers Agent Brisbane
  - Link to top 5 Brisbane suburbs
- Buyers Agent Gold Coast
  - Link to top 3 Gold Coast suburbs
- Buyers Agent Bali
  - Link to top 2 Bali areas

**Column 3: About & Resources**
- About Us
- Meet the Team
  - Jake Edwards
  - Ely Smith
- Blog / Buying Guides
- Success Stories
- Client Testimonials

**Column 4: Property Types**
- Family Homes ($1.5M-$3M)
- Investment Properties
- Off-Market Opportunities
- Recent Purchases

**Column 5: Contact**
- Brisbane Office
  - 668 Wynnum Road, Morningside QLD 4170
  - Phone: +61-413-245-022
- Gold Coast Office
  - 1 Ern Harley Drive, Burleigh Heads QLD 4220
- Email: info@edwardsandsmith.com.au
- Office Hours
- Book Free Consultation (CTA button)

**Footer Bottom:**
- Social media icons (Facebook, Instagram, LinkedIn)
- Copyright © 2025 Edwards and Smith
- Privacy Policy | Terms of Service
- Google Reviews badge (5.0 stars, 52 reviews)
- License numbers and credentials

**SEO Benefits:**
- Internal linking to all major pages
- Keyword-rich anchor text
- Quick access to priority suburbs
- Multiple CTAs for conversions
- Trust signals (reviews, offices, credentials)

---

## Phase 2: Core Page Migration

### 2.1 Homepage
**Current:** Hero, About, Recent Purchases, Buying Guides, Testimonials, FAQ, Newsletter

**Astro Implementation:**
- Hero section with optimized images and clear CTA
  - Value proposition: Why use a buyer's agent
  - Fee framing: "Our service starts with a fee under 5% of the purchase price"
  - Target market messaging: $1.5M-$3M properties for families and owner-occupiers
- "Why Choose Us" section highlighting:
  - Interstate buyers who don't know the market
  - Professional couples who don't have time
  - Buyers who keep missing out on properties
- "About" section with E-E-A-T signals (founders' AFL backgrounds)
- Success stories section with metrics:
  - Speed to purchase examples
  - Savings achieved for clients
  - Right decision stories (avoided bad purchases)
  - Perfect fit testimonials (found ideal family home)
- Featured properties carousel with lazy loading
- Location-specific CTAs (Brisbane, Gold Coast, Bali)
- "What We Do" section explaining buyer's agent services
- FAQ section with `FAQPage` JSON-LD schema
- High-qualification lead capture form (not just newsletter)
- Testimonials with `Review` schema markup

**JSON-LD Schemas:**
- `Organization` (company info, founding story, credentials)
- `FAQPage` (for FAQ section)
- `BreadcrumbList`

**SEO:**
- Title: "Brisbane & Gold Coast Buyers Agents | $1.5M-$3M Properties | Edwards & Smith"
- Meta Description: "Expert buyers agents in Brisbane, Gold Coast & Bali. Help for interstate buyers, busy professionals & families. Find on & off-market properties. Fees under 5%."
- H1: "Find Your Dream Property with Queensland's Trusted Buyers Agents"
- H2: "Specializing in $1.5M-$3M Properties for Families & Owner-Occupiers"

### 2.2 About Page
**Current:** Founder stories, AFL backgrounds, company values

**Astro Implementation:**
- Detailed founder bios with photos
- Company values and process
- Professional credentials and licenses
- Team photo and culture section
- Links to individual agent pages

**JSON-LD Schemas:**
- `Organization` with detailed info
- `Person` schemas for each founder

### 2.3 Services Pages

#### ✅ CONFIRMED: Individual Service Pages (Better SEO/AEO)
Create separate pages for each service to maximize search visibility and answer engine optimization:

1. `/services/full-buyers-agent-service`
   - Target: "full buyers agent service Brisbane"
   - Detailed breakdown of what's included
   - Case studies and success stories
   - Pricing transparency (if possible)

2. `/services/property-evaluation-negotiation`
   - Target: "property negotiation service Gold Coast"
   - When to use this service
   - Sample evaluation reports

3. `/services/auction-bidding-representation`
   - Target: "auction bidding Brisbane"
   - Auction statistics and success rates
   - Bidding strategy insights

**JSON-LD for each:**
- `Service` schema
- `Offer` schema with pricing (if transparent)
- Case study testimonials with `Review` schema

### 2.4 Properties Section

#### Structure:
- `/properties` - Main property listings page
- `/properties/recent-purchases` - Portfolio of successfully purchased properties
- `/properties/for-sale-bali` - Bali-specific properties
- `/properties/off-market-brisbane` - Brisbane off-market opportunities (new)
- `/properties/off-market-gold-coast` - Gold Coast off-market opportunities (new)
- `/properties/off-market-bali` - Bali off-market opportunities (new)

**Individual Property Pages:**
- URL structure: `/properties/[suburb]/[property-address]`
- Example: `/properties/potts-point/123-harbour-view-apartment`

**Each Property Page:**
- High-quality images (optimized, lazy-loaded)
- Property details (bedrooms, bathrooms, size, price)
- Suburb information and nearby amenities
- School ratings (for family-focused buyers)
- Investment potential metrics
- Virtual tour embed (if available)
- Agent contact information

**JSON-LD:**
- `RealEstateListing` schema (as per playbook)
- Nested `Review` if client testimonial available
- `ImageObject` schema for property images

---

## Phase 3: Strategic Content Expansion

### 3.1 Team/Agent Pages Strategy

**Recommendation: Individual Agent Pages (for maximum SEO value)**

**Rationale:**
- Each agent page can rank for "[agent name] buyers agent"
- Builds individual authority and E-E-A-T signals
- Allows for detailed bios, credentials, and testimonials
- Better for local SEO (each agent can list their service areas)

**Structure:**
- `/agents` - Team overview page
- `/agents/jake-edwards` - Individual agent page
- `/agents/ely-smith` - Individual agent page
- (Future agents get their own pages)

**Each Agent Page Must Include:**
- Professional headshot (optimized)
- Detailed bio with AFL career highlights
- Years of experience in real estate
- Areas of expertise (Brisbane, Gold Coast, Bali)
- Recent successful purchases (with permission)
- Client testimonials specific to this agent
- Contact form specific to agent
- Professional credentials and licenses
- Links to articles they've written or been featured in

**JSON-LD:**
- `RealEstateAgent` schema with `AggregateRating`
- Links to company `Organization`
- `areaServed` for each location

**SEO Optimization:**
- Jake Edwards page title: "Jake Edwards - Brisbane Buyers Agent | Former AFL Player | Edwards & Smith"
- Ely Smith page title: "Ely Smith - Gold Coast Buyers Agent | Ex-Brisbane Lions | Edwards & Smith"

### 3.2 Suburb-Specific Landing Pages

**Objective:** Capture "buyers agent [suburb name]" searches

**Priority Suburbs to Create (Based on client focus & search volume):**

#### Brisbane Suburbs (15 pages - High Priority):
- New Farm
- Teneriffe
- Hamilton
- Ascot
- Hawthorne
- Clayfield
- Wilston
- Woolloowin
- West End / Western South Brisbane
- Kurparoo (Coorparoo)
- Camp Hill
- Targandy (Tarragindi)
- Holland Park
- Carina
- Bulimba

#### Gold Coast Suburbs (3 initial areas - High Priority):
- Palm Beach to Broad Beach Waters (create as area overview or separate pages)
- Currumbin Waters (Corumban Waters)
- Eleanora (Elanora)

**Additional Gold Coast suburbs to add later:**
- Burleigh Heads
- Mermaid Beach
- Main Beach
- Miami
- Tugun

#### Bali Areas (4 pages - High Priority):
- Uluwatu
- Canggu
- Legian
- Seminyak

**Additional Bali areas to add later:**
- Ubud
- Sanur
- Jimbaran
- Nusa Dua

**URL Structure:**
- `/buyers-agent-brisbane/[suburb-name]`
- `/buyers-agent-gold-coast/[suburb-name]`
- `/buyers-agent-bali/[area-name]`

**Example:**
- `/buyers-agent-brisbane/new-farm`
- `/buyers-agent-gold-coast/burleigh-heads`
- `/buyers-agent-bali/canggu`

**Each Suburb Page Must Include:**

1. **Hero Section:**
   - H1: "Buyers Agent [Suburb Name] | [Brisbane/Gold Coast/Bali]"
   - High-quality suburb image
   - CTA: "Request Free [Suburb] Property Consultation"

2. **Suburb Overview:**
   - Description of suburb character and appeal
   - Demographics (families, young professionals, retirees)
   - Average property prices (updated quarterly)
   - Recent sales data

3. **Why Buy in [Suburb]:**
   - Lifestyle benefits
   - Schools and education (if applicable)
   - Transport and connectivity
   - Shopping and dining
   - Parks and recreation

4. **Property Types & Prices:**
   - Houses: avg price, features
   - Apartments: avg price, features
   - Land: avg price, availability
   - Investment properties: rental yield data

5. **Recent Purchases (if any):**
   - Showcase properties you've purchased in this suburb
   - Before/after photos
   - Client testimonials

6. **Market Insights:**
   - Current market trends
   - Best time to buy
   - Off-market opportunities in the area
   - Future development plans

7. **FAQ Section:**
   - "Is [Suburb] a good investment?"
   - "What's the average price for a house in [Suburb]?"
   - "What schools are in [Suburb]?"
   - "How competitive is the [Suburb] property market?"

8. **CTA Section:**
   - "Schedule Your Free [Suburb] Property Consultation"
   - Contact form specific to this suburb
   - Phone number and email

**JSON-LD Schemas:**
- `Service` schema (buyers agent service in this location)
- `Place` schema for the suburb
- `FAQPage` schema
- `BreadcrumbList`

**Internal Linking:**
- Link to service pages
- Link to relevant agent pages (agent who specializes in this area)
- Link to nearby suburb pages
- Link to recent property purchases in the area

**Content Freshness:**
- Update market data quarterly
- Add "Last Updated" date prominently
- Keep recent sales and market trends current

### 3.3 Buyer's Agent Value & Off-Market Opportunities Pages

**Objective:** Explain the value of using a buyer's agent AND showcase off-market opportunities

**Important Note:** Content should NOT be 100% focused on off-market properties. Balance is key:
- 40% Why use a buyer's agent
- 30% What a buyer's agent does
- 30% Off-market opportunities and success stories

**Structure:**
- `/buyers-agent-brisbane` (main service page with off-market section)
- `/buyers-agent-gold-coast` (main service page with off-market section)
- `/buyers-agent-bali` (main service page with off-market section)
- `/off-market-properties` (dedicated off-market hub page)

**Each Location-Specific Page Must Include:**

1. **Hero Section:**
   - H1: "Buyers Agent [Brisbane/Gold Coast/Bali] | Find Your Dream Property"
   - Value proposition: "Expert guidance for on-market and off-market properties"
   - Fee framing: "Our service starts with a fee under 5% of the purchase price"
   - CTA: "Book Free Consultation"

2. **Why Use a Buyer's Agent:**
   - Save time in your property search
   - Access to off-market properties
   - Expert negotiation (average savings data)
   - Avoid costly mistakes
   - Market knowledge and insights
   - Emotional buffer during purchase process

3. **What Our Buyer's Agents Do:**
   - Property search (on-market and off-market)
   - Due diligence and inspections
   - Market analysis and valuations
   - Negotiation on your behalf
   - Auction representation
   - Contract review coordination
   - Settlement support

4. **Success Stories (with metrics):**
   - **Speed to Purchase:** "Found and purchased in 3 weeks"
   - **Savings:** "Negotiated $80K below asking price"
   - **Right Decision:** "Avoided a property with major structural issues"
   - **Perfect Fit:** "Found the ideal family home in preferred school zone"
   - Client testimonials with photos and real names (with permission)

5. **Off-Market Opportunities Section:**
   - What are off-market properties
   - Benefits: Less competition, better negotiation, early access
   - Current off-market opportunities display (✅ 6 Gold Coast properties available)
   - **Off-Market Property Card Design:**
     - Frosted/blurred background image (creates intrigue)
     - Suburb name only (e.g., "Palm Beach" - NO exact address)
     - Property details: "4 bed, 2 bath, 2 car"
     - Expected price: "$2.5M"
     - "Register Your Interest" CTA button
     - Note: "Exact address revealed after registration"
   - Grid layout: 2-3 columns on desktop, 1 column on mobile
   - "Register for off-market alerts" CTA

6. **How Our Process Works:**
   - Step 1: Initial consultation (free)
   - Step 2: Define your criteria and budget
   - Step 3: Property search (on and off-market)
   - Step 4: Property evaluations and inspections
   - Step 5: Negotiation and purchase
   - Step 6: Settlement support

7. **Fee Structure:**
   - Clear explanation: "Our service starts with a fee under 5% of the purchase price"
   - Typical range: 2.5% - 3% of purchase price
   - What's included in the fee
   - No hidden costs
   - Payment structure

8. **Lead Capture Form (High Priority - for qualifying leads):**
   - Name (required)
   - Phone number (required)
   - Budget (required)
   - Timeline: Pre-approved / Immediate / In 6 months (required)
   - Suburbs they're looking in (multi-select, required)
   - Property type preference
   - Current situation (first home, upgrading, investment)
   - Email (required)
   - Additional details (optional)

9. **FAQ:**
   - "Why should I use a buyer's agent?"
   - "How much do buyer's agents cost?"
   - "Do buyer's agents save me money?"
   - "Can you help me at auction?"
   - "Do you work with interstate buyers?"
   - "What's the difference between on-market and off-market?"
   - "How long does the process take?"

**JSON-LD:**
- `Service` schema
- `FAQPage` schema
- `Offer` schema (for the service with 2.5-3% fee)

### 3.4 Blog/Content Marketing Strategy

**Objective:** Answer questions that AI engines and users are asking

**Content Pillars:**
1. **Buyer's Agent Value** (Why use a buyer's agent, what they do, ROI)
2. **Success Stories** (Speed, savings, right decisions, perfect fit stories)
3. **Buying Guides** (Brisbane, Gold Coast, Bali - target market focused)
4. **Target Market Guides** (Interstate buyers, professional couples, busy families)
5. **Market Reports & Insights** ($1.5M-$3M property segment)
6. **Suburb Spotlights** (Priority suburbs with family/lifestyle focus)
7. **On-Market vs. Off-Market** (Balanced approach, not 100% off-market focus)
8. **Auction Strategies** (For competitive markets)

**Example Article Topics (High AEO Value):**
- "What is the Best Family-Friendly Suburb in Brisbane for $1.5M-$3M?" (2025)
- "Why Use a Buyer's Agent in Brisbane: 5 Key Benefits for Busy Professionals"
- "Gold Coast Property Market Forecast 2025: Should You Buy Now?"
- "Complete Guide to Buying Property in Bali as an Australian"
- "How a Buyer's Agent Can Save You Time and Money: Real Success Stories"
- "Interstate Buyer's Guide to Brisbane: Everything You Need to Know"
- "Off-Market vs. On-Market Properties: Which is Right for You?"
- "How to Win at Auction: Brisbane Buyers Agent Reveals 7 Strategies"
- "What Does a Buyer's Agent Actually Do? Complete Guide"
- "New Farm vs. Teneriffe: Which Brisbane Suburb is Right for Your Family?"
- "How Much Does a Buyer's Agent Cost? Fee Breakdown & ROI"
- "Professional Couple's Guide to Buying in Brisbane: Time-Saving Strategies"
- "Palm Beach vs. Mermaid Beach: Gold Coast Family Home Comparison"
- "Uluwatu vs. Canggu: Which Bali Area is Best for Your Investment?"

**Blog Post Structure (AEO-Optimized):**
- H1 with question/topic
- First paragraph: Direct answer (50-100 words)
- Table of contents (for long posts)
- Detailed sections with H2/H3 hierarchy
- Author byline with agent credentials
- "Last Updated" date
- Related articles links
- FAQ section at bottom
- CTA to book consultation

**JSON-LD:**
- `Article` or `BlogPosting` schema
- `Person` schema for author
- `FAQPage` if FAQ included

---

## Phase 4: Forms & Lead Qualification

### 4.1 Current Form Issues
- Basic newsletter signup (low qualification)
- Generic "Contact Us" forms
- No lead scoring or vetting

### 4.2 Improved Form Strategy

**Priority Fields for All Forms (to prioritize who to call):**
All forms must capture these essential fields to qualify and prioritize leads:
1. Name (required)
2. Phone number (required)
3. Budget (required)
4. Timeline: Pre-approved / Immediate / In 6 months (required)
5. Suburbs they're looking in (required)

#### Form Hierarchy:

1. **Quick Contact Form** (Homepage, General Pages)
   - Name (required)
   - Phone number (required)
   - Email (required)
   - Budget range (required)
   - "How can we help?" (optional)

2. **High-Qualification Form** (Service Pages, Buyer's Agent Pages)
   - Name (required)
   - Phone number (required)
   - Email (required)
   - Budget (required dropdown/slider)
   - Timeline: Pre-approved / Immediate / In 6 months (required radio buttons)
   - Suburbs you're looking in (required multi-select or text input)
   - Property type (house, apartment, land, townhouse)
   - Current situation (first home, investor, upgrading, downsizing)
   - Additional details (optional)

3. **Suburb-Specific Form** (Suburb Pages)
   - Name (required)
   - Phone number (required)
   - Email (required)
   - Budget (pre-filled with suburb average, editable)
   - Timeline: Pre-approved / Immediate / In 6 months (required)
   - Interested in [Suburb Name] + other suburbs (optional multi-select)
   - Property type preference
   - Additional details (optional)

4. **Off-Market Registration Form** (Off-Market Section)
   - Full name (required)
   - Phone number (required)
   - Email (required)
   - Budget range (required)
   - Timeline: Pre-approved / Immediate / In 6 months (required)
   - Preferred suburbs (required multi-select, minimum 1)
   - Property type (house, apartment, land, townhouse)
   - Current situation (first home, investor, upgrading, downsizing)
   - Finance status (pre-approved, seeking pre-approval, cash buyer)
   - "How did you hear about us?" (optional)

#### Form Best Practices:
- **Validation:** Real-time validation with helpful error messages
- **Progress indicators:** For multi-step forms
- **Mobile optimization:** Large touch targets, number keypads for phone/budget
- **Spam protection:** Honeypot fields + Turnstile/hCaptcha (invisible)
- **Thank you page:** Confirmation with next steps
- **Email automation:** Instant confirmation email, calendar booking link
- **CRM integration:** Auto-send to CRM with lead scoring

#### Lead Scoring System (Based on Required Form Fields):
**High Priority Leads (15+ points) - Call Immediately:**
- Budget $1.5M-$3M (target range) (+8)
- Timeline: Pre-approved (+5)
- Timeline: Immediate (+5)
- Multiple suburbs specified in target areas (+2)
- Off-market registration form (+3)
- Owner-occupier/family home (+2)

**Medium Priority (8-14 points) - Call Within 24 Hours:**
- Budget $1M-$1.5M or $3M+ (+4)
- Timeline: In 6 months (+3)
- Single suburb specified (+1)
- High-qualification form from service pages (+2)
- First home buyer (+1)

**Low Priority (1-7 points) - Follow Up Within 48 Hours:**
- Budget under $1M (+1)
- Timeline: More than 6 months (+1)
- No specific suburbs mentioned (+0)
- Quick contact form only (+1)
- Investor (secondary audience) (+1)

**Auto-prioritization rules:**
- Anyone with "Pre-approved" + Budget $1.5M-$3M = Immediate call
- Interstate buyer + Target budget = High priority
- Professional couple + Target budget = High priority

---

## Phase 5: Technical SEO Implementation

### 5.1 JSON-LD Schema (All Pages)

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Edwards & Smith Buyers Agents",
  "url": "https://edwardsandsmith.com.au",
  "logo": "https://edwardsandsmith.com.au/logo.png",
  "description": "Expert buyers agents in Brisbane, Gold Coast, and Bali. Founded by former AFL players Jake Edwards and Ely Smith.",
  "founders": [
    {
      "@type": "Person",
      "name": "Jake Edwards",
      "jobTitle": "Co-Founder & Buyers Agent",
      "description": "Former Carlton AFL player with 4 years professional experience"
    },
    {
      "@type": "Person",
      "name": "Ely Smith",
      "jobTitle": "Co-Founder & Buyers Agent",
      "description": "Former Brisbane Lions AFL player"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Brisbane"
    },
    {
      "@type": "City",
      "name": "Gold Coast"
    },
    {
      "@type": "Place",
      "name": "Bali"
    }
  ],
  "telephone": "+61-XXX-XXX-XXX",
  "email": "hello@edwardsandsmith.com.au",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Office Address]",
    "addressLocality": "Morningside",
    "addressRegion": "QLD",
    "postalCode": "[Postcode]",
    "addressCountry": "AU"
  }
}
```

**Agent Pages:** Use `RealEstateAgent` schema (see playbook example)

**Property Pages:** Use `RealEstateListing` schema (see playbook example)

**Blog Posts:** Use `Article` schema with author, datePublished, dateModified

**Suburb Pages:** Use `Service` + `Place` schemas

### 5.2 Canonical Tags
- Self-referencing canonical on every page
- Absolute URLs without trailing slashes: `<link rel="canonical" href="https://edwardsandsmith.com.au/page-url" />`
- CRITICAL: Never include trailing slashes in canonical tags

### 5.3 Sitemap & Robots.txt

**sitemap.xml:**
- Automatically generated by Astro
- Include all pages (home, services, agents, suburbs, properties, blog)
- Update frequency: daily for properties/blog, weekly for core pages
- Priority levels: Homepage (1.0), Core pages (0.8), Suburb pages (0.7), Blog (0.6)

**robots.txt:**
```
User-agent: *
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

Sitemap: https://edwardsandsmith.com.au/sitemap.xml
```

### 5.4 Meta Tags (Every Page)

**Required on all pages:**
- Unique `<title>` under 60 characters
- Unique meta description under 160 characters
- Viewport: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Canonical tag

**Open Graph tags:**
```html
<meta property="og:title" content="[Page Title]" />
<meta property="og:description" content="[Page Description]" />
<meta property="og:image" content="[Page Image URL]" />
<meta property="og:url" content="[Canonical URL]" />
<meta property="og:type" content="website" />
```

**Twitter Card tags:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Page Title]" />
<meta name="twitter:description" content="[Page Description]" />
<meta name="twitter:image" content="[Page Image URL]" />
```

### 5.5 URL Structure & Breadcrumbs

**URL patterns:**
- Clean, hyphenated URLs
- Logical hierarchy
- Include keywords

**Examples:**
- `/buyers-agent-brisbane/new-farm`
- `/properties/brisbane/new-farm/123-commercial-road`
- `/agents/jake-edwards`
- `/blog/brisbane-property-market-2025`

**Breadcrumb navigation (all pages except homepage):**
```html
Home > Buyers Agent Brisbane > New Farm
```

**JSON-LD BreadcrumbList schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://edwardsandsmith.com.au"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Buyers Agent Brisbane",
      "item": "https://edwardsandsmith.com.au/buyers-agent-brisbane"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "New Farm",
      "item": "https://edwardsandsmith.com.au/buyers-agent-brisbane/new-farm"
    }
  ]
}
```

### 5.6 Performance Optimization

**Images:**
- WebP/AVIF formats with JPEG fallback
- Responsive images with srcset
- Lazy loading for below-the-fold images
- Explicit width/height to prevent CLS
- Descriptive file names: `brisbane-new-farm-buyers-agent.jpg`
- Alt text: "Edwards & Smith buyers agent Jake Edwards standing in New Farm park"

**Fonts:**
- Preload critical fonts
- Use font-display: swap
- Subset fonts to only needed characters

**CSS/JS:**
- Critical CSS inlined
- Non-critical CSS deferred
- Minify all assets
- No unused CSS/JS

**Caching:**
- Static assets: 1 year cache
- HTML: 1 hour cache
- Images: 1 month cache

**CDN:**
- Cloudflare or similar for global performance
- Auto-minification
- Brotli compression

### 5.7 Trailing Slash Redirect Strategy

**Critical: All URLs must NOT have trailing slashes**

**Redirect Configuration (Vercel example):**
```json
// vercel.json
{
  "redirects": [
    {
      "source": "/:path*/",
      "destination": "/:path*",
      "permanent": true
    }
  ]
}
```

**Redirect Configuration (Cloudflare Pages _redirects):**
```
/*/ /:splat 301!
```

**Redirect Configuration (Netlify _redirects):**
```
/*/ /:splat 301!
```

**What this does:**
- Any URL with a trailing slash (e.g., `/buyers-agent-brisbane/`) automatically redirects to the non-trailing version (e.g., `/buyers-agent-brisbane`)
- 301 = permanent redirect (preserves SEO value)
- The `!` forces the redirect even if the file exists

**Testing checklist:**
- [ ] `/` (homepage) works
- [ ] `/about/` → redirects to `/about`
- [ ] `/buyers-agent-brisbane/` → redirects to `/buyers-agent-brisbane`
- [ ] `/buyers-agent-brisbane/new-farm/` → redirects to `/buyers-agent-brisbane/new-farm`
- [ ] Internal links never include trailing slashes
- [ ] Sitemap has no trailing slashes
- [ ] Canonical tags have no trailing slashes

---

## Phase 6: Video Integration

### 6.1 Video Content Strategy

**Video Types:**
1. **Agent Introduction Videos** (Homepage, Agent Pages)
   - Jake & Ely introduction
   - Individual agent profiles
   - 30-60 seconds each

2. **Service Explainer Videos** (Service Pages)
   - "How our buyers agent service works"
   - "What to expect at auction"
   - 1-2 minutes each

3. **Property Walkthroughs** (Property Pages)
   - Video tours of purchased properties
   - Before/after renovations
   - 2-3 minutes

4. **Suburb Spotlight Videos** (Suburb Pages)
   - Walk through key suburbs
   - Highlight amenities and lifestyle
   - 3-5 minutes

5. **Client Testimonial Videos** (Homepage, Service Pages)
   - Happy client interviews
   - Success stories
   - 1-2 minutes

6. **Educational Content** (Blog/YouTube)
   - "How to buy property in Brisbane"
   - "Off-market property explained"
   - "Auction tips from buyers agents"
   - 5-10 minutes

### 6.2 Video Technical Implementation

**Hosting:**
- **Option A:** YouTube (free, SEO benefits, schema markup available)
- **Option B:** Vimeo (cleaner, no ads, more control)
- **Option C:** Self-hosted with CDN (maximum control, higher cost)

**Recommendation:** YouTube for blog/educational, Vimeo/self-hosted for property tours

**Video Schema Markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "How to Buy Property in New Farm Brisbane",
  "description": "Buyers agent Jake Edwards explains the property buying process in Brisbane's New Farm suburb.",
  "thumbnailUrl": "https://edwardsandsmith.com.au/videos/new-farm-guide-thumbnail.jpg",
  "uploadDate": "2025-01-15",
  "duration": "PT5M30S",
  "contentUrl": "https://youtube.com/watch?v=...",
  "embedUrl": "https://youtube.com/embed/..."
}
```

**Video Optimization:**
- Lazy load video embeds
- Use poster images
- Provide transcripts for accessibility and SEO
- Add captions
- Optimize video titles and descriptions for SEO

**Video Directory Structure:**
```
/videos/
  /agents/
    jake-edwards-intro.mp4
    ely-smith-intro.mp4
  /services/
    full-service-explainer.mp4
    auction-representation.mp4
  /properties/
    [property-id]-walkthrough.mp4
  /suburbs/
    new-farm-suburb-tour.mp4
    burleigh-heads-lifestyle.mp4
  /testimonials/
    client-1-success-story.mp4
  /educational/
    buying-guide-brisbane.mp4
    off-market-explained.mp4
```

---

## Phase 7: Content Collections & Dynamic Pages

### 7.1 Astro Content Collections Setup

**Collections to create:**
1. `properties` - Property listings
2. `suburbs` - Suburb pages
3. `agents` - Team member profiles
4. `blog` - Blog posts/articles
5. `testimonials` - Client reviews
6. `services` - Service offerings

**Example: Suburbs Collection**

`src/content/config.ts`:
```typescript
import { z, defineCollection } from 'astro:content';

const suburbsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    region: z.enum(['brisbane', 'gold-coast', 'bali']),
    slug: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroImage: z.string(),
    averageHousePrice: z.number(),
    averageApartmentPrice: z.number(),
    medianRent: z.number(),
    demographics: z.string(),
    keyFeatures: z.array(z.string()),
    schools: z.array(z.object({
      name: z.string(),
      type: z.enum(['primary', 'secondary', 'private']),
      rating: z.number().optional()
    })).optional(),
    transportOptions: z.array(z.string()),
    lastUpdated: z.date(),
    featured: z.boolean().default(false),
    agent: z.string().optional(), // Assign specific agent to suburb
  }),
});

const agentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    role: z.string(),
    bio: z.string(),
    image: z.string(),
    phone: z.string(),
    email: z.string(),
    specialties: z.array(z.string()),
    serviceAreas: z.array(z.string()),
    yearsExperience: z.number(),
    credentials: z.array(z.string()),
    rating: z.number().optional(),
    reviewCount: z.number().optional(),
  }),
});

// Export collections
export const collections = {
  'suburbs': suburbsCollection,
  'agents': agentsCollection,
  // ... other collections
};
```

**Example Suburb File:**

`src/content/suburbs/new-farm.md`:
```markdown
---
title: "New Farm"
region: "brisbane"
slug: "new-farm"
metaTitle: "Buyers Agent New Farm Brisbane | Edwards & Smith"
metaDescription: "Looking for a buyers agent in New Farm? Edwards & Smith help you find houses & apartments in Brisbane's most sought-after riverside suburb."
heroImage: "/images/suburbs/new-farm-hero.jpg"
averageHousePrice: 1850000
averageApartmentPrice: 685000
medianRent: 750
demographics: "Young professionals, families, empty nesters"
keyFeatures:
  - "Riverside dining and cafes"
  - "New Farm Park and farmers markets"
  - "Boutique shopping precincts"
  - "Close to Brisbane CBD"
  - "Character homes and modern apartments"
schools:
  - name: "New Farm State School"
    type: "primary"
    rating: 4.5
  - name: "Brisbane State High School"
    type: "secondary"
    rating: 4.7
transportOptions:
  - "CityCat ferry service"
  - "Bus routes to CBD"
  - "Bike paths along Brisbane River"
  - "15 minutes to CBD by car"
lastUpdated: 2025-01-15
featured: true
agent: "jake-edwards"
---

## Why Buy in New Farm?

New Farm is one of Brisbane's most desirable inner-city suburbs, known for its riverside location, boutique shopping, and vibrant cafe culture. As buyers agents specializing in New Farm, we help clients navigate this competitive market to find the perfect property.

[Rest of content...]
```

### 7.2 Dynamic Page Generation

**Suburb Pages:**
`src/pages/buyers-agent-brisbane/[slug].astro`:
```astro
---
import { getCollection } from 'astro:content';
import Layout from '@layouts/SuburbLayout.astro';

export async function getStaticPaths() {
  const suburbs = await getCollection('suburbs', ({ data }) => {
    return data.region === 'brisbane';
  });

  return suburbs.map((suburb) => ({
    params: { slug: suburb.data.slug },
    props: { suburb },
  }));
}

const { suburb } = Astro.props;
const { Content } = await suburb.render();
---

<Layout
  title={suburb.data.metaTitle}
  description={suburb.data.metaDescription}
  suburb={suburb.data}
>
  <!-- Hero Section -->
  <!-- Suburb Overview -->
  <Content />
  <!-- Property Types -->
  <!-- Recent Purchases -->
  <!-- Market Insights -->
  <!-- FAQ -->
  <!-- CTA -->
</Layout>
```

---

## Phase 8: AEO Content Optimization

### 8.1 Content Rules (Apply to All Content)

**✅ DO:**
- Start with direct answers in first 100 words
- Use conversational, natural language
- Include specific local examples
- Add author bylines with credentials
- Display "Last Updated" dates
- Use semantic HTML5 structure
- Include FAQ sections with schema
- Link internally to related content
- Add personal anecdotes from agents
- Use contractions naturally

**❌ DON'T:**
- Keyword stuff
- Use generic AI-generated fluff
- Add content to schema that's not visible on page
- Create fake reviews
- Ignore user intent
- Neglect local details

### 8.2 Content Humanization Process

For each piece of content:
1. Run through AI detection tool (Originality.ai)
2. Aim for < 30% AI score
3. Add personal touches (specific local references)
4. Have credited agent review and approve
5. Add unique insights or data
6. Vary sentence structure

### 8.3 E-E-A-T Implementation

**Experience:**
- Showcase successful purchases
- Include before/after stories
- Reference years in business
- Share market cycle insights

**Expertise:**
- Display credentials and licenses
- Reference AFL backgrounds (unique angle)
- Show market analysis capabilities
- Demonstrate local knowledge

**Authoritativeness:**
- Get featured in local news/publications
- Create original market research
- Publish regular market reports
- Build relationships with real estate industry

**Trustworthiness:**
- Display genuine client testimonials
- Show transparent process
- Include contact information prominently
- Link to industry associations

---

## Phase 9: Reddit & Forum Engagement

### 9.1 Target Subreddits
- r/Brisbane
- r/GoldCoast
- r/AusProperty
- r/RealEstate
- r/RealEstateInvesting
- r/FirstTimeHomeBuyer
- r/AusFinance

### 9.2 Engagement Strategy

**Week 1-2:** Research and lurk
- Identify common questions
- Understand community culture
- Note pain points

**Week 3-4:** Begin engaging
- Answer questions with value
- Share market insights
- Provide suburb recommendations

**Ongoing:**
- 2-3 thoughtful posts per week
- Answer questions authentically
- Share blog posts when genuinely helpful
- Build authority over time

**Content to Create Based on Reddit Questions:**
- Turn popular Reddit Q&As into blog posts
- Create FAQ pages from common questions
- Develop suburb comparisons from discussions

---

## Phase 10: Deployment & Monitoring

### 10.1 Hosting & Deployment

**Confirmed Stack:**
- **Hosting:** ✅ Vercel (confirmed)
- **Advantages:**
  - Automatic deployments from Git
  - Global CDN
  - Excellent performance
  - Free SSL
  - Preview deployments
  - Edge functions for forms/API routes
  - Built-in analytics

**Vercel Configuration Required:**
```json
// vercel.json
{
  "trailingSlash": false,
  "redirects": [
    {
      "source": "/:path*/",
      "destination": "/:path*",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

**Deployment Process:**
1. Push to Git repository
2. Automatic build triggered
3. Deploy to staging environment (preview deployment)
4. QA testing
5. Deploy to production (merge to main branch)

### 10.2 Pre-Launch Checklist

**Technical:**
- [ ] All pages pass Core Web Vitals
- [ ] Lighthouse scores > 95
- [ ] All JSON-LD schemas validated
- [ ] Sitemap generated and submitted (no trailing slashes)
- [ ] Robots.txt configured
- [ ] Canonical tags on all pages (no trailing slashes)
- [ ] **All internal links have NO trailing slashes**
- [ ] **301 redirects from trailing slash URLs to non-trailing**
- [ ] 404 page implemented
- [ ] Redirects from old WordPress URLs set up
- [ ] SSL certificate active
- [ ] Security headers configured
- [ ] **URL consistency audit completed (no trailing slashes anywhere)**

**Content:**
- [ ] All pages have unique titles and descriptions
- [ ] All images optimized and have alt text
- [ ] All internal links working
- [ ] No broken external links
- [ ] Author attributions on all content
- [ ] "Last Updated" dates displayed

**Forms:**
- [ ] All forms tested and working
- [ ] Email notifications set up
- [ ] CRM integration active
- [ ] Thank you pages configured
- [ ] Spam protection enabled

### 10.3 Post-Launch Monitoring

**Tools to Implement:**
- **Google Search Console:** Monitor indexing and search performance
- **Google Analytics 4:** Track traffic and conversions
- **PageSpeed Insights:** Monitor Core Web Vitals
- **Ahrefs/Semrush:** Track keyword rankings
- **Hotjar/Microsoft Clarity:** Session recordings and heatmaps

**Weekly Monitoring:**
- Check indexing status in Search Console
- Review form submissions and lead quality
- Monitor Core Web Vitals scores
- Check for 404 errors

**Monthly Reporting:**
- Organic traffic growth
- Keyword ranking improvements
- Conversion rate trends
- Top performing pages
- Top traffic sources

### 10.4 Content Update Schedule

**Weekly:**
- Add new property listings
- Update off-market opportunities

**Monthly:**
- Publish 2-4 new blog posts
- Update property market data on suburb pages
- Add new client testimonials

**Quarterly:**
- Update all suburb page statistics
- Review and update older blog content
- Analyze top performing content

---

## Success Metrics & KPIs

### 6 Months Post-Launch:
- **Performance:** All pages LCP < 2.5s, Lighthouse > 95
- **Indexing:** 100% of important pages indexed by Google
- **Traffic:** 50% increase in organic traffic vs. old site
- **Rankings:** Top 5 for 20+ suburb-specific keywords
- **Leads:** 30% increase in qualified lead submissions
- **Conversions:** 10% improvement in form completion rate

### 12 Months Post-Launch:
- **Traffic:** 150% increase in organic traffic
- **Rankings:**
  - Page 1 for "buyers agent Brisbane"
  - Page 1 for "buyers agent Gold Coast"
  - Top 3 for 50+ suburb-specific keywords
- **AI Citations:** Cited in 10+ ChatGPT/Perplexity responses
- **Leads:** 100% increase in qualified leads
- **Conversions:** 5% visitor-to-lead conversion rate

---

## Implementation Timeline

### Month 1: Foundation
- Week 1-2: Astro setup, component library, design system
- Week 3-4: Core pages migration (Home, About, Services)

### Month 2: Content Expansion
- Week 1-2: Agent pages, Property section setup
- Week 3-4: First 10 suburb pages (Brisbane high-priority)

### Month 3: Content Completion
- Week 1-2: Next 10 suburb pages (Brisbane + Gold Coast)
- Week 3-4: Gold Coast suburb pages, Off-market pages

### Month 4: Bali & Blog
- Week 1-2: Bali suburb/area pages
- Week 3-4: Blog setup, first 10 articles

### Month 5: Polish & Testing
- Week 1-2: Forms optimization, video integration
- Week 3-4: QA testing, performance optimization

### Month 6: Launch & Monitor
- Week 1: Soft launch, monitoring
- Week 2-4: Full launch, redirect old URLs, monitor and optimize

---

## Budget Estimates

### Development Costs:
- **Astro Setup & Core Pages:** 40-60 hours
- **Suburb Pages (40-50 pages):** 80-100 hours
- **Blog Setup & Initial Content:** 30-40 hours
- **Forms & Integrations:** 20-30 hours
- **Testing & QA:** 20-30 hours

**Total Development:** 190-260 hours

### Content Costs:
- **Suburb Research & Writing:** $200-300 per page x 50 = $10K-15K
- **Blog Articles:** $300-500 per article x 20 = $6K-10K
- **Video Production:** $1K-2K per professional video x 10 = $10K-20K

**Total Content:** $26K-45K

### Tools & Services (Annual):
- **Hosting (Vercel/Netlify):** $0-500/year
- **Domain & SSL:** $50/year
- **SEO Tools (Ahrefs/Semrush):** $1,200-2,400/year
- **Analytics (Google Analytics):** Free
- **CRM Integration:** $300-1,200/year
- **AI Detection Tools:** $200-500/year

**Total Tools:** $1,750-4,650/year

---

## Risk Mitigation

### Risk 1: Traffic Drop During Migration
**Mitigation:**
- Implement 301 redirects for all WordPress URLs
- Keep WordPress live until Astro site is fully indexed
- Monitor Search Console daily post-launch
- Have rollback plan ready

### Risk 2: Loss of Existing Rankings
**Mitigation:**
- Maintain exact same URL structure where possible
- Keep all existing content (don't delete pages)
- Improve content quality on migration
- Set up comprehensive redirects

### Risk 3: Poor Lead Quality from New Forms
**Mitigation:**
- Implement lead scoring system
- A/B test form fields
- Add qualification questions gradually
- Monitor conversion rates closely

### Risk 4: Content Not Ranking
**Mitigation:**
- Follow AEO playbook strictly
- Get genuine client testimonials
- Build internal linking structure
- Create high-quality, unique content
- Update content regularly

---

## Next Steps

1. **Review this plan** and provide feedback
2. **Prioritize sections** based on business goals
3. **Gather assets:**
   - High-quality images (properties, suburbs, team)
   - Videos (if available)
   - Client testimonials (with permissions)
   - Market data and statistics
4. **Set up infrastructure:**
   - Git repository
   - Hosting account
   - Analytics and tracking
5. **Begin Phase 1** (Foundation & Setup)

---

## Ready to Start - Phase 1 Execution

### ✅ Confirmed Requirements
1. **Priority Suburbs:** Brisbane (15 suburbs), Gold Coast (3 initial areas), Bali (4 areas)
2. **Target Market:** $1.5M-$3M, owner-occupiers/families (primary), investors (secondary)
3. **Client Personas:** Interstate buyers, professional couples, buyers who keep missing out
4. **Fee Structure:** "Under 5% of purchase price" (2.5-3%)
5. **Hosting:** Vercel
6. **Google Reviews:** Available and ready to integrate
7. **Design Approach:** Keep current WordPress style, improve performance and mobile

### 🚀 Starting Now
**Phase 1.0:** Repository cleanup
**Phase 1.1:** Astro project setup with core pages (Home, About, Services)
**Phase 1.2:** Design system extraction from WordPress site

### 🔍 Visual Testing Approach
**Question:** Do you want to set up Playwright MCP for visual verification?
- **If Yes:** Will enable automated visual testing and screenshots during development
- **If No:** Will proceed with manual verification using localhost and preview deployments

### ❓ Outstanding Questions (Can Answer Later)

1. **Current WordPress URL Structure:** Complete list of current URLs for redirect mapping
2. **Off-Market Database:** Database of off-market properties to feature
3. **Success Stories:** Specific examples with metrics and client permissions
4. **Video Content:** Available videos and storage locations
5. **CRM Integration:** Current CRM system (Salesforce, HubSpot, custom?)
6. **Lead Routing:** High-priority lead recipients and callback process
7. **Content Ownership:** Who writes/approves suburb page content
8. **Agent Involvement:** Jake and Ely's availability for content review
9. **Budget Allocation:** Total project budget
10. **Timeline:** Target launch date
11. **Success Definition:** Primary KPI (traffic, qualified leads, conversions?)

---

**Prepared by:** Claude (AI Assistant)
**Date:** October 1, 2025
**Based on:** The Ultimate AI Engine Optimization (AEO) Playbook for Real Estate
