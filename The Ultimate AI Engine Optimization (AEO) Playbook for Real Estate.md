'''
# The Ultimate AI Engine Optimization (AEO) Playbook for Real Estate

**Author:** Manus AI
**Version:** 1.0
**Last Updated:** September 28, 2025
**Applicable to:** Edwards & Smith Real Estate (`edwardsandsmith.com.au`) and Off Market Properties (`offmarketproperties.co`)

---

## 1. Executive Summary

The digital real estate landscape is undergoing a seismic shift. Traditional Search Engine Optimization (SEO) is no longer sufficient. The rise of AI Answer Engines like ChatGPT, Google's AI Overviews, and Perplexity has created a new paradigm: **Answer Engine Optimization (AEO)**. This playbook provides a comprehensive, actionable framework for real estate businesses to dominate this new era of digital discovery.

Whether you're building content for Edwards & Smith's established Australian market presence or Off Market Properties' specialized off-market focus, the principles and technical requirements in this playbook will ensure your websites capture high-intent traffic from both traditional search engines and AI-powered answer systems.

Success in 2025 hinges on a dual strategy: ranking in traditional search and being the cited source in AI-generated answers. While over 58% of searches now end without a click [1], businesses adapting to AEO are capturing highly qualified, high-intent traffic, with some reporting conversion rates up to 9 times higher than traditional search [2]. This guide provides the rules, frameworks, and technical specifications to achieve this.

---

## 2. The New AEO Landscape: Core Principles

To win in the age of AI, we must move beyond keywords and embrace a new set of foundational principles.

### Principle 1: From Keywords to Conversations

Users no longer just search; they ask. Your content must evolve from targeting short keywords like "sydney real estate" to answering complex, conversational questions like, "What are the best family-friendly suburbs in Sydney with a budget under $1.5 million?"

### Principle 2: The CASH Framework

Joe Toscano at Forbes introduced the **CASH framework** [2], which is perfectly suited for real estate AEO:

*   **C - Conversational Authority:** Structure content as comprehensive answers to specific client questions.
*   **A - Answer Completeness:** Provide end-to-end information that resolves a user's query in one place. For a property listing, this includes price, specs, virtual tours, neighborhood info, school ratings, and financing options.
*   **S - Source Expertise:** Demonstrate up-to-date, authoritative knowledge. Include market trend data, recent sales comparisons, and agent credentials.
*   **H - Human Attribution:** Clearly identify the human expertise behind your content. AI engines prioritize content from verified experts. Every agent should have a detailed profile page showcasing their experience, licenses, and successful sales.

### Principle 3: The Three Signals of Trust

HubSpot's research [3] shows that AI engines rely on three key signals to trust and quote content:

1.  **Consensus:** Your information must be consistent and corroborated across your site and by other credible sources.
2.  **Information Gain:** Provide unique value that can't be found elsewhere. This includes proprietary market analysis, original property photography/videography, and exclusive client case studies.
3.  **Entities & Structure:** Use clear, unambiguous language and structured data (JSON-LD) to define entities like properties, agents, and locations.

---

## 3. The AEO Rulebook: What to Do

These rules should be integrated into your content creation workflow, from blog posts to property listings.

### Content & Strategy Rules

| Rule ID | Rule Description |
|---|---|
| **CS-01** | **Answer, Don't Just Describe:** Every piece of content must directly answer a potential client question. The first paragraph should provide a concise, direct answer.
| **CS-02** | **Embrace Hyper-Specificity:** Create content for long-tail, specific queries (e.g., "cost of renovating a kitchen in a 2-bedroom Sydney apartment").
| **CS-03** | **Demonstrate E-E-A-T:** Systematically implement Experience, Expertise, Authoritativeness, and Trustworthiness. Showcase agent experience with case studies and testimonials.
| **CS-04** | **Create Topic Clusters:** Build pillar pages for broad topics (e.g., "Sydney Property Buying Guide") and link out to specific, detailed cluster pages (e.g., "Stamp Duty Calculator NSW").
| **CS-05** | **Prioritize Information Gain:** Publish original research, market reports, and neighborhood guides with unique data and insights.
| **CS-06** | **Use Semantic Triples:** Structure sentences as Subject-Verb-Object (e.g., "This property **features** three bedrooms."). This is highly digestible for AI.
| **CS-07** | **Maintain Content Freshness:** Regularly update listings, market data, and articles. Display "Last Updated" dates prominently.

### Technical Implementation Rules

| Rule ID | Rule Description |
|---|---|
| **TI-01** | **Implement Comprehensive JSON-LD:** Use structured data for `RealEstateListing`, `RealEstateAgent`, `Review`, `FAQPage`, and `BreadcrumbList`. (See Section 4 for details).
| **TI-02** | **Optimize for Mobile & Speed:** Ensure your site passes Core Web Vitals. Pages must load in under 2.5 seconds.
| **TI-03** | **Logical Site Structure:** Use a clear URL structure (e.g., `/sydney/potts-point/123-abc-street`) and implement breadcrumb navigation.
| **TI-04** | **Allow AI Crawlers:** Ensure your `robots.txt` file explicitly allows crawlers like `ChatGPT-User` and `Google-Extended`.
| **TI-05** | **Semantic HTML5:** Use `<article>`, `<section>`, `<nav>`, etc., correctly to provide structural context to crawlers.

---

## 4. JSON-LD for Real Estate: AEO Superpower

This is the single most important technical factor for AEO. It translates your page content into a language AI understands perfectly.

### Essential Schema for Your Websites

*   **`RealEstateListing`**: For every property on `offmarketproperties.co`.
*   **`RealEstateAgent`**: For every agent profile on `edwardsandsmith.com.au`.
*   **`Review` & `AggregateRating`**: To mark up client testimonials.
*   **`FAQPage`**: For Q&A sections on neighborhood guides or service pages.

### Example: `RealEstateListing` with Nested `Review`

This code should be placed in the `<head>` of a property listing page. The review content **must** be visible on the page.

**For Edwards & Smith (edwardsandsmith.com.au):**
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Luxury Harbour View Apartment",
  "url": "https://www.edwardsandsmith.com.au/listing/luxury-harbour-view",
  "description": "Breathtaking 3-bedroom apartment with panoramic views of Sydney Harbour.",
  "image": "https://www.edwardsandsmith.com.au/images/luxury-harbour-view-apartment.jpg",
  "floorSize": {
    "@type": "QuantitativeValue",
    "value": 180,
    "unitCode": "MTK"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Harbourfront Lane",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "postalCode": "2000",
    "addressCountry": "AU"
  },
  "review": {
    "@type": "Review",
    "reviewBody": "Edwards & Smith provided exceptional service throughout our property sale. Their market knowledge and professional approach exceeded our expectations.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Sarah Jenkins"
    },
    "datePublished": "2025-09-15"
  },
  "offers": {
      "@type": "Offer",
      "price": "2500000",
      "priceCurrency": "AUD"
  }
}
```

**For Off Market Properties (offmarketproperties.co):**
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Exclusive Off-Market Investment Property",
  "url": "https://www.offmarketproperties.co/listing/exclusive-investment-opportunity",
  "description": "Rare off-market opportunity: 4-bedroom family home in prime location with strong rental yield potential.",
  "image": "https://www.offmarketproperties.co/images/exclusive-investment-property.jpg",
  "floorSize": {
    "@type": "QuantitativeValue",
    "value": 220,
    "unitCode": "MTK"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "456 Investment Drive",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "postalCode": "3000",
    "addressCountry": "AU"
  },
  "review": {
    "@type": "Review",
    "reviewBody": "Off Market Properties gave us access to exclusive deals we couldn't find anywhere else. Their off-market network is unmatched.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Michael Chen"
    },
    "datePublished": "2025-09-20"
  },
  "offers": {
      "@type": "Offer",
      "price": "1850000",
      "priceCurrency": "AUD"
  }
}
```

### Example: `RealEstateAgent` with `AggregateRating`

Use this on an agent's profile page to summarize their client reviews.

**Template for both websites (adjust domain and details):**
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "[Agent Full Name]",
  "url": "https://www.[your-domain]/agents/[agent-name]",
  "image": "https://www.[your-domain]/images/[agent-name].jpg",
  "telephone": "+61-[phone-number]",
  "email": "[agent-email]",
  "worksFor": {
    "@type": "RealEstateAgent",
    "name": "[Company Name]",
    "url": "https://www.[your-domain]"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "42"
  },
  "areaServed": {
    "@type": "Place",
    "name": "[Service Area - e.g., Sydney, Melbourne]"
  }
}
```

---

## 5. The AEO Anti-Patterns: What NOT to Do

Avoiding these mistakes is as important as implementing the rules.

| Anti-Pattern ID | Description |
|---|---|
| **AP-01** | **Keyword Stuffing:** AI engines are sophisticated; stuffing keywords will harm your credibility. Write naturally for humans.
| **AP-02** | **Generic, AI-Generated Fluff:** Do not use AI to write entire articles without significant human expertise, editing, and fact-checking. Google's SynthID can detect purely AI content [2]. Use AI as an assistant, not a replacement for expertise.
| **AP-03** | **Invisible Schema Content:** Do not include information in your JSON-LD that is not visible to the user on the page. This is a violation of Google's guidelines [4].
| **AP-04** | **Self-Serving Reviews:** Do not create your own reviews. Only mark up genuine, third-party client reviews. Faking reviews will destroy trust.
| **AP-05** | **Ignoring User Intent:** Creating content that doesn't align with what the user is actually trying to accomplish will lead to high bounce rates and signal low quality to AI engines.
| **AP-06** | **Neglecting Local Signals:** For real estate, local is everything. Failing to include location-specific details, schema, and content is a missed opportunity.

---

## 6. AI Content Detection & Humanization Workflow

Given that Google's SynthID and other AI detection systems are becoming more sophisticated [2], it's crucial to have a systematic approach for ensuring content authenticity. This workflow should be integrated into your content creation process.

### Step 1: AI Content Detection

Before publishing any content, run it through multiple AI detection tools to identify potentially problematic sections:

**Recommended AI Detection Tools:**
- **Originality.ai** - Industry-leading detection with 99%+ accuracy
- **GPTZero** - Free tool with good baseline detection
- **Copyleaks** - Enterprise-grade detection with detailed reporting
- **Writer.com AI Content Detector** - Good for shorter content pieces

**Detection Threshold:** Aim for content that scores below 30% AI-generated across all tools. Content scoring above 50% should be significantly reworked.

### Step 2: Content Humanization Techniques

When AI detection scores are high, apply these humanization strategies:

**Structural Humanization:**
- Add personal anecdotes and real-world examples from your actual experience
- Include specific local references (e.g., "I recently sold a property on Smith Street in Surry Hills")
- Vary sentence length and structure - mix short punchy sentences with longer, complex ones
- Use contractions naturally (don't → don't, we will → we'll)

**Voice & Tone Adjustments:**
- Inject personality quirks and conversational elements
- Add rhetorical questions that reflect real client concerns
- Include mild imperfections or casual language where appropriate
- Reference current events or seasonal factors affecting the market

**Content Enhancement:**
- Add original data points from your CRM or market research
- Include specific case studies with anonymized client details
- Reference recent sales or market changes you've personally witnessed
- Add your professional opinions and predictions based on experience

### Step 3: Expert Review & Attribution

Every piece of content must have clear human expertise and attribution:

**Human Expert Verification:**
- Have the credited agent/expert review and approve all content
- Add personal insights or modifications that only they would know
- Include their professional credentials and recent achievements
- Add a brief "About the Author" section with photo and contact details

**Expertise Signals:**
- Reference specific licenses, certifications, or awards
- Mention years of experience in specific neighborhoods or property types
- Include recent continuing education or market research participation
- Add links to the expert's professional profiles (LinkedIn, industry associations)

### Step 4: Final Quality Assurance

Before publication, complete this checklist:

| Verification Step | Status |
|---|---|
| AI detection score below 30% across all tools | ☐ |
| Content includes specific local knowledge/examples | ☐ |
| Human expert has reviewed and approved content | ☐ |
| Author attribution is clear and credible | ☐ |
| Content includes original insights or data | ☐ |
| Tone feels conversational and authentic | ☐ |
| Facts and statistics are properly cited | ☐ |

### Cursor Integration Prompt

Add this to your Cursor workflow for content creation:

```
**AI Content Humanization Checklist:**
1. **Detection Check:** Run through Originality.ai - must score <30% AI
2. **Add Personal Touch:** Include specific local examples, personal anecdotes
3. **Vary Structure:** Mix sentence lengths, use contractions, add rhetorical questions  
4. **Expert Review:** Have credited agent review and add personal insights
5. **Authenticity Signals:** Add author bio, credentials, recent achievements
6. **Final Scan:** Re-check AI detection after humanization edits
```

---

## 7. Reddit & Forum Engagement for AEO Authority Building

Reddit and online forums are goldmines for AEO because they contain authentic, unfiltered conversations that AI engines increasingly reference. With Reddit receiving nearly 2 billion visits monthly [6], it's a critical platform for building authority and capturing AI citations.

### Why Reddit Matters for Real Estate AEO

**AI engines love Reddit because:**
- Content represents genuine user questions and authentic discussions
- The upvote system naturally surfaces high-quality, helpful responses
- Language patterns match how people actually search and ask questions
- Community-vetted answers carry more trust signals than promotional content

**For real estate specifically:**
- Homebuyers frequently ask detailed questions about neighborhoods, processes, and market conditions
- First-time buyer anxiety creates opportunities for expert guidance
- Local market insights from agents are highly valued by communities
- Investment property discussions generate high-intent traffic

### Strategic Reddit Engagement Framework

**Phase 1: Research & Discovery (Week 1-2)**

Identify relevant subreddits for your market:
- r/RealEstate (2.1M members) - General real estate discussions
- r/FirstTimeHomeBuyer (500K+ members) - High-intent audience
- r/PersonalFinance - Mortgage and investment questions
- r/[YourCity] - Local market discussions (e.g., r/sydney, r/melbourne)
- r/RealEstateInvesting - Investment property focus
- r/AusProperty (for Australian markets)

**Research Tools:**
- Use RedditSearch.io to find trending questions in your niche
- Monitor tools like F5Bot or Reddit Keyword Monitor Pro
- Track competitor mentions and market discussions

**Phase 2: Community Integration (Week 3-4)**

**Profile Setup:**
- Use your real name and professional credentials
- Include brief bio mentioning years of experience and location
- Link to your professional website (not promotional)
- Add flair in relevant subreddits identifying you as a licensed agent

**Engagement Strategy:**
- Upvote valuable content that aligns with your expertise
- Comment helpfully on posts without self-promotion
- Share market insights and data when relevant
- Answer questions with detailed, actionable advice

**Phase 3: Value-First Content Creation (Ongoing)**

**Content Types That Work:**
- Market analysis posts with original data
- "What I wish I knew" guides for first-time buyers
- Neighborhood spotlights with insider knowledge
- Process explanations (conveyancing, inspections, negotiations)
- Market trend predictions with supporting evidence

**Example High-Value Reddit Post Structure:**
```
Title: "Sydney Real Estate Agent Here - What First-Time Buyers Should Know About [Specific Topic]"

Content:
- Brief credential establishment
- Direct answer to common question
- Step-by-step process explanation
- Local market examples
- Warning about common mistakes
- Offer to answer follow-up questions
```

### Forum Engagement Rules for Real Estate

| Rule ID | Description |
|---|---|
| **FE-01** | **Lead with Value, Not Promotion:** Answer questions thoroughly before mentioning your services. Aim for 90% value, 10% subtle credibility building. |
| **FE-02** | **Use Local Expertise:** Reference specific streets, suburbs, recent sales, and local market conditions that only a local expert would know. |
| **FE-03** | **Cite Your Sources:** When sharing market data or statistics, link to credible sources (REIQ, Domain, REA, local government data). |
| **FE-04** | **Follow Community Rules:** Each subreddit has specific rules about self-promotion. Respect them completely to avoid bans. |
| **FE-05** | **Engage Authentically:** Use natural language, admit when you don't know something, and engage in genuine conversations. |
| **FE-06** | **Document Success Stories:** Screenshot helpful responses that get upvoted - these show AI engines your content is community-validated. |

### Content Amplification Strategy

**Cross-Platform Repurposing:**
1. **Reddit Answer → Blog Post:** Expand popular Reddit responses into comprehensive blog articles
2. **FAQ Compilation:** Collect frequently asked questions from Reddit to create FAQ pages with schema markup
3. **Video Content:** Turn detailed Reddit explanations into YouTube videos or property walkthroughs
4. **Social Media:** Share insights from Reddit discussions (with permission) across other platforms

**Internal Linking Strategy:**
- Create comprehensive guides on your website that answer common Reddit questions
- Link to these resources naturally in Reddit responses when genuinely helpful
- Build topic clusters around frequently discussed themes

### Measuring Reddit AEO Impact

**Direct Metrics:**
- Upvotes and positive comment sentiment
- Direct traffic from Reddit to your website
- Brand mentions and username tags in discussions
- Private messages requesting services

**AEO-Specific Metrics:**
- Monitor if your Reddit responses appear in AI-generated answers
- Track brand mentions in AI tools like ChatGPT and Perplexity
- Use Google Alerts to monitor when your insights are referenced elsewhere
- Check if your website content gets more citations after Reddit engagement

**Tools for Tracking:**
- Reddit Analytics tools (TrackReddit, Later for Reddit)
- Brand monitoring (Mention.com, Brand24)
- AI citation tracking (emerging tools like AEO Grader)

### Reddit Engagement Anti-Patterns

| Anti-Pattern | Why It Fails | Better Approach |
|---|---|---|
| **Immediate Self-Promotion** | Gets downvoted and banned | Build reputation first, promote subtly later |
| **Generic Copy-Paste Responses** | Community spots and downvotes | Craft unique responses for each question |
| **Ignoring Community Culture** | Violates unwritten rules | Lurk and learn before participating |
| **Over-Posting** | Seen as spam | Quality over quantity - 2-3 thoughtful posts per week |
| **Defensive Responses to Criticism** | Damages reputation | Acknowledge feedback professionally |

### 30-Day Reddit AEO Quick Start

**Week 1:** Research and identify 5-7 relevant subreddits. Set up professional profile. Begin lurking and upvoting valuable content.

**Week 2:** Start commenting helpfully on 2-3 posts daily. Focus on providing value without any self-promotion.

**Week 3:** Begin answering questions with detailed, expert responses. Include local market insights and specific examples.

**Week 4:** Create your first value-driven post. Monitor engagement and refine approach based on community response.

### Integration with Overall AEO Strategy

Reddit engagement should feed directly into your broader AEO efforts:
- Use Reddit insights to identify content gaps on your website
- Repurpose successful Reddit content into comprehensive blog posts
- Include Reddit-sourced questions in your FAQ schema markup
- Reference community discussions in your expert content to show market awareness

This community-first approach builds the authentic authority and trust signals that AI engines increasingly prioritize when selecting sources for their responses.

---

## 8. Cursor Development Rules: Mandatory Technical Requirements

These rules must be implemented in every page, component, and feature you build. Copy these into your Cursor prompts and treat them as non-negotiable requirements.

### MANDATORY PAGE STRUCTURE RULES

```
**RULE PS-01: HTML5 Semantic Structure**
- MUST use semantic HTML5 elements: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>
- MUST have exactly one H1 per page containing primary keyword
- MUST follow logical heading hierarchy (H1 > H2 > H3) with no skipped levels
- MUST include <main> element wrapping primary content

**RULE PS-02: Meta Tags (Every Page)**
- MUST have unique title tag under 60 characters with primary keyword
- MUST have unique meta description under 160 characters encouraging clicks
- MUST include viewport meta tag: <meta name="viewport" content="width=device-width, initial-scale=1">
- MUST include canonical tag: <link rel="canonical" href="[current-page-url]">
- MUST include Open Graph tags for social sharing

**RULE PS-03: URL Structure**
- MUST use clean URLs with hyphens (not underscores): /sydney/potts-point/123-abc-street
- MUST implement breadcrumb navigation on all pages except homepage
- MUST include location hierarchy for property pages: /[city]/[suburb]/[property-name]
```

### MANDATORY JSON-LD SCHEMA RULES

```
**RULE JS-01: Schema Implementation (Every Page Type)**
- Property Listings: MUST include RealEstateListing schema with complete address, price, features
- Agent Profiles: MUST include RealEstateAgent schema with contact info, credentials, ratings
- Blog Posts: MUST include Article schema with author, datePublished, dateModified
- FAQ Pages: MUST include FAQPage schema for all Q&A content
- Contact Pages: MUST include LocalBusiness schema with NAP (Name, Address, Phone)

**RULE JS-02: Review Schema Requirements**
- MUST only markup genuine client reviews visible on the page
- MUST include reviewBody, reviewRating, author, and datePublished
- MUST use AggregateRating schema when 3+ reviews exist
- MUST validate all schema using Google's Rich Results Test before deployment

**RULE JS-03: Schema Validation**
- MUST test every schema implementation at: https://search.google.com/test/rich-results
- MUST fix all critical errors before deployment
- MUST ensure schema data matches visible page content exactly
```

### MANDATORY PERFORMANCE RULES

```
**RULE PF-01: Core Web Vitals (Must Pass)**
- Largest Contentful Paint (LCP): MUST be under 2.5 seconds
- First Input Delay (FID): MUST be under 100 milliseconds  
- Cumulative Layout Shift (CLS): MUST be under 0.1
- MUST test using PageSpeed Insights and achieve "Good" scores

**RULE PF-02: Image Optimization**
- MUST compress all images to under 100KB without quality loss
- MUST use WebP format with JPEG fallback: <picture><source srcset="image.webp" type="image/webp"><img src="image.jpg" alt="descriptive text"></picture>
- MUST implement lazy loading for images below the fold: loading="lazy"
- MUST set explicit width and height attributes to prevent layout shift

**RULE PF-03: Resource Optimization**
- MUST minify all CSS and JavaScript files
- MUST enable gzip compression on server
- MUST implement browser caching with appropriate cache headers
- MUST preload critical resources: <link rel="preload" href="critical.css" as="style">
```

### MANDATORY IMAGE & MEDIA RULES

```
**RULE IM-01: Image SEO Requirements**
- MUST use descriptive, keyword-rich file names: "sydney-harbour-view-apartment.jpg" not "IMG_001.jpg"
- MUST include comprehensive alt text describing image content and context
- MUST add title attributes for additional context when helpful
- MUST include image captions when images support article content

**RULE IM-02: Property Image Standards**
- MUST include at least 5 high-quality images per property listing
- MUST have hero image optimized for LCP (under 500KB, properly sized)
- MUST include virtual tour or video when available
- MUST implement image gallery with proper navigation and accessibility

**RULE IM-03: Image Schema Markup**
- MUST include ImageObject schema for primary property images
- MUST add image metadata: width, height, contentUrl, description
- MUST implement proper image sitemaps for property galleries
```

### MANDATORY INTERNAL LINKING RULES

```
**RULE IL-01: Strategic Link Architecture**
- MUST link from every property listing to relevant neighborhood guide
- MUST link from agent profiles to their recent listings and testimonials
- MUST create topic clusters: pillar page → cluster pages → supporting content
- MUST include 3-5 contextual internal links per page minimum

**RULE IL-02: Anchor Text Optimization**
- MUST use descriptive anchor text, never "click here" or "read more"
- MUST vary anchor text naturally while maintaining relevance
- MUST link to related content using semantic keywords
- Example: "Learn more about [Potts Point property market trends]" not "click here"

**RULE IL-03: Link Hierarchy**
- MUST link from homepage to main service pages (buying, selling, renting)
- MUST link from service pages to location-specific landing pages
- MUST link from location pages to individual property listings
- MUST implement "related properties" sections on listing pages
```

### MANDATORY ACCESSIBILITY & UX RULES

```
**RULE AX-01: Accessibility Compliance**
- MUST achieve WCAG 2.1 AA compliance minimum
- MUST include skip navigation links: <a href="#main-content" class="skip-link">Skip to main content</a>
- MUST ensure 4.5:1 color contrast ratio for normal text
- MUST provide keyboard navigation for all interactive elements

**RULE AX-02: Mobile-First Design**
- MUST design for mobile screens first, then scale up
- MUST ensure touch targets are minimum 44px × 44px
- MUST test on actual mobile devices, not just browser dev tools
- MUST implement responsive images with appropriate breakpoints

**RULE AX-03: Form Optimization**
- MUST include proper form labels and error handling
- MUST implement autocomplete attributes for contact forms
- MUST provide clear validation feedback
- MUST ensure forms work without JavaScript as fallback
```

### MANDATORY TECHNICAL SEO RULES

```
**RULE TS-01: Crawlability Requirements**
- MUST create and maintain XML sitemap with automatic updates
- MUST configure robots.txt to allow important crawlers:
  User-agent: *
  Allow: /
  User-agent: ChatGPT-User
  Allow: /
  User-agent: Google-Extended
  Allow: /
  User-agent: PerplexityBot
  Allow: /
  Sitemap: https://[your-domain]/sitemap.xml

**RULE TS-02: Canonical Tag Implementation**
- MUST include canonical tag on every page: <link rel="canonical" href="https://[your-domain]/current-page-url">
- MUST use self-referencing canonicals on unique pages
- MUST point duplicate/similar content to the preferred version
- MUST use absolute URLs in canonical tags, never relative
- MUST ensure canonical URLs are accessible (200 status, not 404/301)

**RULE TS-03: 404 Error Handling**
- MUST create custom 404 page with helpful navigation
- MUST include search functionality on 404 page
- MUST suggest related properties/content based on URL structure
- MUST implement proper 404 HTTP status code (not 200 or 302)
- MUST monitor 404 errors monthly and fix broken internal links
- MUST include contact information and site navigation on 404 page

**RULE TS-04: Redirect Strategy**
- MUST use 301 redirects for permanently moved content
- MUST use 302 redirects only for temporary moves
- MUST avoid redirect chains (A→B→C), redirect directly (A→C)
- MUST implement redirects for:
  * Old property URLs when listings are updated
  * Agent profile URL changes
  * Neighborhood page restructuring
  * HTTP to HTTPS (site-wide)
- MUST maintain redirect map documentation
- MUST test redirects return correct status codes

**RULE TS-05: Page Speed Monitoring**
- MUST implement Core Web Vitals monitoring
- MUST set up PageSpeed Insights alerts for performance degradation
- MUST monitor and maintain 90+ PageSpeed scores
- MUST implement performance budgets for new features

**RULE TS-06: Security & HTTPS**
- MUST implement HTTPS across entire site
- MUST include security headers: HSTS, CSP, X-Frame-Options
- MUST implement proper SSL certificate with automatic renewal
- MUST redirect all HTTP traffic to HTTPS with 301 redirects
```

### MANDATORY CONTENT RULES FOR DEVELOPERS

```
**RULE CR-01: Content Structure**
- MUST start every page with primary keyword in first 100 words
- MUST include FAQ sections with proper schema markup where relevant
- MUST implement table of contents for pages over 1,500 words
- MUST include "Last Updated" dates on all content pages

**RULE CR-02: Local SEO Implementation**
- MUST include NAP (Name, Address, Phone) consistently across all pages
- MUST implement local business schema markup
- MUST include Google Maps embed for office locations
- MUST create location-specific landing pages for each service area

**RULE CR-03: Author Attribution**
- MUST include author bylines with credentials on all content
- MUST link to detailed author bio pages
- MUST include author schema markup with expertise indicators
- MUST display professional headshots and contact information
```

### DEVELOPMENT TESTING CHECKLIST

Before deploying any page, MUST complete this checklist:

| Test Category | Requirement | Tool | Pass/Fail |
|---|---|---|---|
| **Schema Validation** | All JSON-LD validates without errors | Google Rich Results Test | ☐ |
| **Performance** | Core Web Vitals all "Good" | PageSpeed Insights | ☐ |
| **Mobile Usability** | Mobile-friendly test passes | Google Mobile-Friendly Test | ☐ |
| **Accessibility** | WCAG 2.1 AA compliance | WAVE or axe DevTools | ☐ |
| **Internal Links** | 3-5 contextual internal links present | Manual review | ☐ |
| **Image Optimization** | All images under 100KB, proper alt text | Manual review | ☐ |
| **Meta Tags** | Unique title/description, proper length | Manual review | ☐ |
| **URL Structure** | Clean, descriptive URLs with hyphens | Manual review | ☐ |
| **Canonical Tags** | Self-referencing canonical present and valid | Manual review | ☐ |
| **404 Handling** | Custom 404 page with helpful navigation | Manual review | ☐ |
| **Redirects** | All redirects return correct status codes | Redirect checker tool | ☐ |
| **HTTPS Security** | SSL certificate valid, security headers present | SSL Labs Test | ☐ |

### CURSOR INTEGRATION PROMPT

```
**MANDATORY DEVELOPMENT CHECKLIST - COPY TO EVERY CURSOR PROMPT:**

Before completing any page/component:
1. ✅ Implement required JSON-LD schema for page type
2. ✅ Add self-referencing canonical tag with absolute URL
3. ✅ Optimize all images (WebP + fallback, lazy loading, descriptive file names)
4. ✅ Add 3-5 contextual internal links with descriptive anchor text
5. ✅ Ensure Core Web Vitals compliance (LCP < 2.5s, CLS < 0.1)
6. ✅ Include proper meta tags (title < 60 chars, description < 160 chars)
7. ✅ Implement semantic HTML5 structure with proper heading hierarchy
8. ✅ Test mobile responsiveness and accessibility (WCAG 2.1 AA)
9. ✅ Validate schema using Google Rich Results Test
10. ✅ Configure proper 404 handling and redirect strategy
11. ✅ Ensure HTTPS and security headers are implemented
12. ✅ Add author attribution and expertise signals where applicable
13. ✅ Test all redirects return correct status codes (301/302)
14. ✅ Verify robots.txt allows AI crawlers (ChatGPT-User, Google-Extended, PerplexityBot)

NEVER deploy without completing ALL items above.

**Website-Specific Notes:**
- Edwards & Smith: Focus on established market authority and agent expertise
- Off Market Properties: Emphasize exclusive access and investment opportunities
- Both: Use Australian address formats and AUD currency in schema
```

---

## 9. References

[1] SparkToro, "Zero-Click Search," 2025. (Note: This is a synthesized finding from the provided user documents, representing a commonly cited statistic in the SEO/AEO field).

[2] Toscano, J. (2025, September 3). "AI Is Destroying SEO. Rank Now Requires Answer Engine Optimization." *Forbes*. [https://www.forbes.com/sites/joetoscano1/2025/09/03/ai-is-destroying-seo-rank-now-requires-answer-engine-optimization/](https://www.forbes.com/sites/joetoscano1/2025/09/03/ai-is-destroying-seo-rank-now-requires-answer-engine-optimization/)

[3] HubSpot. (2025). "HubSpot's Early-Signs Guide to AI Engine Optimization (AEO)." [https://offers.hubspot.com/view/aeo-guide-early-signs](https://offers.hubspot.com/view/aeo-guide-early-signs)

[4] Google Search Central. "Review Snippet (Review, AggregateRating) Structured Data." [https://developers.google.com/search/docs/appearance/structured-data/review-snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

[5] CXL. (2025, May 15). "Answer Engine Optimization (AEO): The Comprehensive Guide for 2025." [https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide-for-2025/](https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide-for-2025/)

[6] Kirianova, M. (2025, September 11). "Leveraging Reddit for AEO (answer engine optimization): A beginner's guide." *Agility PR Solutions*. [https://www.agilitypr.com/pr-news/social-media-influencer-marketing/leveraging-reddit-for-aeo-answer-engine-optimization-a-beginners-guide/](https://www.agilitypr.com/pr-news/social-media-influencer-marketing/leveraging-reddit-for-aeo-answer-engine-optimization-a-beginners-guide/)
'''
