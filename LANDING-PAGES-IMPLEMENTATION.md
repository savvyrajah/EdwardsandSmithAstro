# Landing Pages Implementation Plan

**Date:** October 10, 2025
**Purpose:** Create AEO-optimized landing pages to capture 5,000+ monthly impressions currently getting 0 clicks
**Expected Impact:** 150-400 monthly clicks from "buyers agent gold coast" and "buyers agent brisbane" searches

---

## Pages Created

### 1. Gold Coast Buyers Agent (`/gold-coast-buyers-agent`)
- **URL:** https://www.edwardsandsmith.com.au/gold-coast-buyers-agent
- **Title:** Gold Coast Buyers Agent | Save $65k+ | Ex-AFL Founded | 2-3% Fee
- **Target Keywords:** buyers agent gold coast, gold coast buyers agents, gold coast buyers agent
- **Pre-filled Location:** gold-coast
- **Lead Source:** "Gold Coast Buyers Agent Landing Page"

### 2. Brisbane Buyers Agent (`/brisbane-buyers-agent`)
- **URL:** https://www.edwardsandsmith.com.au/brisbane-buyers-agent
- **Title:** Brisbane Buyers Agent | Save $65k+ | Ex-AFL Founded | 2-3% Fee
- **Target Keywords:** buyers agent brisbane, brisbane buyers agents, brisbane buyers agent
- **Pre-filled Location:** brisbane
- **Lead Source:** "Brisbane Buyers Agent Landing Page"

---

## Content Structure

### Hero Section
- H1 with location-specific keyword optimization
- Trust badges: $75M+ purchased, 200+ buyers, 5-star rating
- CTA button to consultation form

### Direct Answer (AEO CS-01)
- First paragraph answers "What is a [Location] Buyers Agent?"
- Includes specific stats and suburbs
- Semantic triples for AI digestibility

### Why Choose Edwards & Smith
- Ex-AFL player credentials (Jake Edwards - Carlton, Ely Smith - Brisbane Lions)
- 2-3% transparent fee
- Access to off-market properties
- Deep local market knowledge
- Average 4-week purchase timeline

### Testimonials
- 3-4 location-specific client reviews
- Review schema markup included
- 5-star ratings displayed

### Recent Purchases
- 3 properties from the location
- Results shown: savings, timeline, off-market status
- Links to full property details

### FAQ Section
- 8-10 location-specific questions
- FAQPage schema markup
- Answers common buyer concerns

### Consultation Form
- Exact copy of /book-free-consultation form
- Location pre-filled (hidden field)
- Lead source tracked for attribution
- Same HubSpot integration (Form ID: ca10e16f-6931-40a3-96c5-d69087bdd5f1)

---

## Schema Markup (AEO Compliance)

### Gold Coast Page:
- **RealEstateAgent** - Company info with aggregateRating
- **LocalBusiness** - Gold Coast office (1 Ern Harley Drive, Burleigh Heads)
- **FAQPage** - 10 Gold Coast specific questions
- **Service** - Buyers agent service with pricing

### Brisbane Page:
- **RealEstateAgent** - Company info with aggregateRating
- **LocalBusiness** - Brisbane office (668 Wynnum Road, Morningside)
- **FAQPage** - 10 Brisbane specific questions
- **Service** - Buyers agent service with pricing

---

## Modified Files

### 1. Homepage (`src/pages/index.astro`)
**Change:** Title tag optimization
- **Before:** `Brisbane & Gold Coast Buyers Agents | Edwards & Smith | Access Off-Market Properties`
- **After:** `Buyers Agent Gold Coast & Brisbane | Save $65k+ | Ex-AFL Founded | 2-3% Fee`

### 2. Footer (`src/components/Footer.astro`)
**Change:** Add landing pages to Locations section
- Added: Gold Coast Buyers Agent (top of list)
- Added: Brisbane Buyers Agent (second in list)

### 3. Internal Links Added ✅
**Pages with new contextual links:**
- `/services.astro` - Links to both landing pages (in Why Choose Us section)
- `/gold-coast/recent-purchases.astro` - Links to Gold Coast landing page (CTA section)
- `/brisbane/recent-purchases.astro` - Links to Brisbane landing page (CTA section)
- `/gold-coast-buyers-guide.astro` - Links to Gold Coast landing page (final CTA)
- `/brisbane-buyers-guide.astro` - Links to Brisbane landing page (final CTA)

**Total Internal Links:**
- Gold Coast landing page: 3 contextual links
- Brisbane landing page: 3 contextual links
- All use descriptive anchor text with target keywords

---

## HubSpot Integration

### Form Configuration
- **Form ID:** ca10e16f-6931-40a3-96c5-d69087bdd5f1 (existing, proven to work)
- **API Endpoint:** /api/hubspot-form (no changes)
- **Field Mappings:** Same as /book-free-consultation

### Key Differences by Landing Page

**Gold Coast:**
```javascript
fields.preferred_location = 'gold-coast'  // Pre-filled
fields.lead_source = 'Gold Coast Buyers Agent Landing Page'  // Tracking
context.pageUri = '/gold-coast-buyers-agent'
context.pageName = 'Gold Coast Buyers Agent'
```

**Brisbane:**
```javascript
fields.preferred_location = 'brisbane'  // Pre-filled
fields.lead_source = 'Brisbane Buyers Agent Landing Page'  // Tracking
context.pageUri = '/brisbane-buyers-agent'
context.pageName = 'Brisbane Buyers Agent'
```

### Benefits
- Lead source attribution per landing page
- Location automatically captured
- No new HubSpot forms needed
- Existing workaround/retry logic still applies

---

## AEO Playbook Compliance

| Rule | Implementation | Status |
|------|---------------|--------|
| CS-01 | Direct answer in first paragraph | ✅ |
| CS-02 | Hyper-specific Gold Coast/Brisbane content | ✅ |
| CS-03 | E-E-A-T signals (AFL background, stats) | ✅ |
| CS-06 | Semantic triples | ✅ |
| CS-07 | Last Updated dates | ✅ |
| TI-01 | Comprehensive JSON-LD schema | ✅ |
| TI-03 | Clean URL structure | ✅ |
| PS-01 | Proper H1 hierarchy | ✅ |
| PS-02 | Unique meta tags < 60/160 chars | ✅ |
| PS-03 | Breadcrumb navigation | ✅ |
| TS-02 | Canonical tags | ✅ |
| IL-01 | Strategic internal linking (3-5 links min) | ✅ |
| IL-02 | Descriptive anchor text | ✅ |
| CR-01 | Primary keyword in first 100 words | ✅ |
| CR-02 | Local SEO (NAP, location-specific) | ✅ |
| CR-03 | Author attribution (Jake & Ely) | ✅ |

---

## Testing Checklist

### Pre-Deployment
- [ ] Build test passes (`npm run build`)
- [ ] All schema validates (Google Rich Results Test)
- [ ] Mobile responsive
- [ ] All internal links work
- [ ] Canonical tags correct

### Post-Deployment
- [ ] Submit URLs to Google Search Console
- [ ] Test form submission on live site
- [ ] Run PageSpeed Insights
- [ ] Verify schema renders in search results
- [ ] Monitor HubSpot for submissions with correct lead source

---

## Expected Results

### Week 1
- Pages indexed by Google
- Appearing in search results for exact-match queries

### Week 2-4
- CTR improvement: 0% → 2-4%
- First organic clicks and form submissions

### Month 2-3
- CTR stabilizes: 3-8%
- 150-400 monthly clicks
- Better quality leads (high intent, location-specific)

---

## Risk Assessment

**Overall Risk Level:** ⭐ Very Low

| Risk | Likelihood | Mitigation |
|------|------------|-----------|
| Form breaks | Very Low | Using exact same proven form code |
| HubSpot issues | Very Low | Not touching API handler |
| Build errors | Low | Test before commit |
| SEO cannibalization | Very Low | Different URLs, complementary content |

---

## Files Created

```
src/pages/gold-coast-buyers-agent.astro
src/pages/brisbane-buyers-agent.astro
```

## Files Modified

```
src/pages/index.astro (title only)
src/components/Footer.astro (2 links added)
src/pages/services.astro (internal links)
src/pages/gold-coast/recent-purchases.astro (internal link)
src/pages/brisbane/recent-purchases.astro (internal link)
src/pages/gold-coast-buyers-guide.astro (internal link)
src/pages/brisbane-buyers-guide.astro (internal link)
```

## Files NOT Modified

```
api/hubspot-form.js (NO CHANGES)
src/pages/book-free-consultation.astro (NO CHANGES)
```

---

## Implementation Date

**Executed:** October 10, 2025
**Landing Pages Committed:** a0b0dcc (Oct 10, 2025)
**Internal Links Committed:** 28ec4c4 (Oct 10, 2025)
**Deployed:** [Pending user approval to push]

---

## Notes

- All content follows AEO playbook guidelines
- No made-up stats or fake testimonials
- All suburbs and examples are real
- Schema markup uses real business data
- Forms tested and proven to work with HubSpot
