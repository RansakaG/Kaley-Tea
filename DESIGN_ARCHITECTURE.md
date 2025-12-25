# 🍃 KALEY TEA - Website Design Architecture
## "Healing One Forest, One Community and You, One Flavourful Sip at a Time"

---

## 📋 Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Design Philosophy](#2-design-philosophy)
3. [Information Architecture](#3-information-architecture)
4. [Visual Design System](#4-visual-design-system)
5. [Component Architecture](#5-component-architecture)
6. [Page Structure](#6-page-structure)
7. [User Experience Flow](#7-user-experience-flow)
8. [Technical Architecture](#8-technical-architecture)
9. [Form & Interaction Patterns](#9-form--interaction-patterns)
10. [Responsive Design Strategy](#10-responsive-design-strategy)
11. [Performance & Accessibility](#11-performance--accessibility)

---

## 1. Executive Summary

### 🎯 Project Vision
The Kaley Tea website is a **digital sanctuary** — a calm, beautiful, and purposeful web experience that mirrors the healing philosophy of the brand. It's not about loud marketing, but **gentle storytelling, beautiful imagery, and purposeful simplicity**.

### 🌟 Key Objectives
| Objective | Description | Priority |
|-----------|-------------|----------|
| **Visit & Heal** | Invite guests to experience the healing retreat | 🔴 Primary |
| **Buy, Sip & Heal** | Enable tea product ordering | 🟡 Secondary |
| **Connect & Heal** | Build community collaboration | 🟢 Tertiary |

### ⚠️ Critical Design Principle
> **The site should first promote "VISIT & HEAL" without making tea buyers feel they are less important.**

---

## 2. Design Philosophy

### 🍃 Brand Essence
```
┌─────────────────────────────────────────────────────────────┐
│                    KALEY TEA BRAND DNA                       │
├─────────────────────────────────────────────────────────────┤
│  🌿 NATURE      │  Connection to forest, organic farming    │
│  💚 HEALING     │  Wellness, calm, restorative experience   │
│  🤝 COMMUNITY   │  Fair trade, local upliftment             │
│  ☕ AUTHENTICITY │  Handcrafted, artisan quality            │
│  🌍 SUSTAINABILITY │  Forest restoration, conservation     │
└─────────────────────────────────────────────────────────────┘
```

### 🎨 Design Mood
- **Calm & Serene** — Not busy or overwhelming
- **Organic & Natural** — Earth tones, flowing shapes
- **Premium & Authentic** — Subtle luxury, handcrafted feel
- **Inviting & Warm** — Welcoming, not corporate
- **Purposeful** — Every element serves the mission

### ✨ Visual Metaphors
| Metaphor | Implementation |
|----------|----------------|
| 🌿 Tea Leaves | Subtle leaf patterns, organic shapes |
| 🌄 Forest Canopy | Layered gradients, depth |
| ☕ Steam Rising | Gentle animations, floating elements |
| 🌊 Flowing Water | Smooth transitions, wave effects |
| 🌅 Golden Hour | Warm accents, golden highlights |

---

## 3. Information Architecture

### 🗺️ Site Map Overview

```
                          ┌─────────────────┐
                          │    HOME PAGE    │
                          │   (Hero + CTAs) │
                          └────────┬────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         │                         │                         │
         ▼                         ▼                         ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│  🌿 VISIT &     │   │  ☕ BUY, SIP &   │   │  🤝 CONNECT &   │   │  📖 OUR HEALING │
│     HEAL        │   │     HEAL        │   │     HEAL        │   │     STORY       │
│   (3 sections)  │   │   (5 sections)  │   │   (6 sections)  │   │   (4 sections)  │
└─────────────────┘   └─────────────────┘   └─────────────────┘   └─────────────────┘
         │                     │                     │                     │
         ▼                     ▼                     ▼                     ▼
   ├─ Tour with Us       ├─ Products           ├─ Restore Nature    ├─ About Us
   ├─ Live with Us       ├─ Sri Lanka Buyers   ├─ Uplift Communities├─ Gallery
   └─ Nearby Places      ├─ International      ├─ Grow Crops        ├─ Awards & Certs
                         ├─ Buy in Bulk        ├─ Develop Products  └─ Reviews & Press
                         └─ Where to Taste     ├─ Join Programmes
                                               └─ Donate

                          ┌─────────────────┐
                          │  UTILITY PAGES  │
                          │ Contact + FAQ   │
                          └─────────────────┘
```

### 📊 Navigation Hierarchy

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ HEADER NAVIGATION                                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│  [Logo]  │  Visit & Heal ▼  │  Buy, Sip & Heal ▼  │  Connect & Heal ▼  │     │
│          │                  │                     │                     │     │
│  KALEY   │  ├─ Tour with Us │  ├─ Our Products    │  ├─ Restore Nature  │     │
│  TEA     │  ├─ Live with Us │  ├─ Consumers (SL)  │  ├─ Uplift Community│     │
│          │  └─ Nearby Places│  ├─ International   │  ├─ Grow Crops      │     │
│          │                  │  ├─ Buy in Bulk     │  ├─ Develop Products│     │
│          │                  │  └─ Where to Taste  │  ├─ Join Programmes │     │
│          │                  │                     │  └─ Donate          │     │
│          │                  │                     │                     │     │
│          │  Our Healing Story ▼                   │  [Book Now] Button  │     │
│          │  ├─ About Us                           │                     │     │
│          │  ├─ Gallery                            │                     │     │
│          │  ├─ Awards & Certifications            │                     │     │
│          │  └─ Reviews & Press                    │                     │     │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 📈 User Journey Prioritization

```
                    VISIT & HEAL (Primary)
                           ▲
                           │ 40% traffic focus
                           │
    ┌──────────────────────┼──────────────────────┐
    │                      │                      │
    ▼ 30%                  │                      ▼ 20%
BUY, SIP & HEAL                              CONNECT & HEAL
                           │
                           │ 10%
                           ▼
                    OUR HEALING STORY
                    (Supporting Trust)
```

---

## 4. Visual Design System

### 🎨 Color Palette

```css
/* PRIMARY COLORS - Forest & Nature */
--forest-deep:     #1a4d2e;    /* Primary brand - Deep forest green */
--forest-dark:     #0d2818;    /* Headers, dark accents */
--forest-light:    #2d6b45;    /* Hover states, secondary */

/* ACCENT COLORS - Earth & Warmth */
--terracotta:      #c17f59;    /* Warm accent, earth tones */
--terracotta-light:#d49a7a;    /* Hover states */
--gold:            #c9a66b;    /* Premium accents, highlights */
--gold-light:      #e0cba3;    /* Subtle highlights */
--gold-dark:       #a88a4a;    /* Deep gold accents */

/* NEUTRAL COLORS - Calm Background */
--cream:           #faf8f5;    /* Primary background */
--cream-dark:      #f0ece5;    /* Secondary background */
--white:           #ffffff;    /* Card backgrounds */

/* TEXT COLORS */
--text-dark:       #1e2a24;    /* Primary text */
--text-muted:      #5a6b62;    /* Secondary text */
```

### 🎨 Color Usage Guidelines

| Color | Usage | Context |
|-------|-------|---------|
| `--forest-deep` | Primary buttons, headers, links | Main CTA, navigation |
| `--gold` | Highlights, badges, accents | Premium feel, important info |
| `--terracotta` | Secondary accents, quotes | Warmth, earth connection |
| `--cream` | Backgrounds, page base | Calm, clean canvas |
| `--white` | Cards, content areas | Focus areas |

### 🔤 Typography System

```css
/* FONT FAMILY */
font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;

/* TYPE SCALE */
--text-xs:   0.75rem;   /* 12px - Labels, captions */
--text-sm:   0.875rem;  /* 14px - Helper text */
--text-base: 1rem;      /* 16px - Body text */
--text-lg:   1.125rem;  /* 18px - Lead paragraphs */
--text-xl:   1.25rem;   /* 20px - Card titles */
--text-2xl:  1.5rem;    /* 24px - Section headers */
--text-3xl:  1.875rem;  /* 30px - Page titles */
--text-4xl:  2.25rem;   /* 36px - Hero text */
--text-5xl:  3rem;      /* 48px - Hero headline */

/* FONT WEIGHTS */
--font-light:    300;   /* Taglines, quotes */
--font-regular:  400;   /* Body text */
--font-medium:   500;   /* Subtle emphasis */
--font-semibold: 600;   /* Subheadings */
--font-bold:     700;   /* Headlines, CTAs */

/* LINE HEIGHT */
--leading-tight:  1.25;  /* Headlines */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed:1.75;  /* Long-form content */
--leading-loose:  1.85;  /* Spacious paragraphs */
```

### ✨ Shadow System

```css
/* ELEVATION SCALE */
--shadow-soft:   0 4px 20px rgba(26, 77, 46, 0.06);   /* Subtle cards */
--shadow-medium: 0 8px 32px rgba(26, 77, 46, 0.12);   /* Hover cards */
--shadow-strong: 0 16px 48px rgba(26, 77, 46, 0.18); /* Featured elements */
--shadow-gold:   0 4px 16px rgba(201, 166, 107, 0.2); /* Golden glow */
```

### 📐 Spacing System

```css
/* SPACING SCALE (8px base unit) */
--space-1:  0.25rem;  /*  4px */
--space-2:  0.5rem;   /*  8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 🎭 Border Radius

```css
--radius-sm:   4px;   /* Small elements */
--radius-md:   8px;   /* Buttons, inputs */
--radius-lg:   12px;  /* Cards, sections */
--radius-xl:   16px;  /* Featured cards */
--radius-2xl:  24px;  /* Large containers */
--radius-full: 50px;  /* Badges, pills */
```

---

## 5. Component Architecture

### 📦 Component Hierarchy

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Main navigation
│   │   ├── Footer.tsx           # Footer with links
│   │   ├── MobileNav.tsx        # Mobile navigation drawer
│   │   ├── PageLayout.tsx       # Common page wrapper
│   │   └── Section.tsx          # Section container
│   │
│   ├── ui/
│   │   ├── Button.tsx           # Primary/secondary buttons
│   │   ├── Card.tsx             # Content cards
│   │   ├── Badge.tsx            # Status badges
│   │   ├── Modal.tsx            # Modal dialogs
│   │   ├── Accordion.tsx        # Expandable sections
│   │   ├── Dropdown.tsx         # Dropdown menus
│   │   ├── Input.tsx            # Form inputs
│   │   ├── Textarea.tsx         # Text areas
│   │   ├── Select.tsx           # Select dropdowns
│   │   └── LoadingSpinner.tsx   # Loading states
│   │
│   ├── blocks/
│   │   ├── HeroSection.tsx      # Hero with CTA
│   │   ├── FeatureGrid.tsx      # Feature cards grid
│   │   ├── TestimonialSlider.tsx# Customer reviews
│   │   ├── ImageGallery.tsx     # Photo/video gallery
│   │   ├── ProductGrid.tsx      # Product catalog
│   │   ├── CTABanner.tsx        # Call-to-action banners
│   │   ├── Timeline.tsx         # Journey timeline
│   │   └── MapSection.tsx       # Location/attractions map
│   │
│   ├── forms/
│   │   ├── BookingForm.tsx      # Tour/stay booking
│   │   ├── BulkInquiryForm.tsx  # B2B orders
│   │   ├── ApplicationForm.tsx  # Volunteer/collaboration
│   │   ├── DonationForm.tsx     # Donation submissions
│   │   └── ContactForm.tsx      # General contact
│   │
│   └── shared/
│       ├── Logo.tsx             # Brand logo
│       ├── SocialLinks.tsx      # Social media icons
│       ├── WhatsAppButton.tsx   # WhatsApp integration
│       ├── LanguageSelect.tsx   # i18n selector
│       └── ThemeToggle.tsx      # Dark/light mode
│
├── pages/
│   ├── HomePage.tsx
│   ├── visit-heal/
│   │   ├── TourWithUs.tsx
│   │   ├── LiveWithUs.tsx
│   │   └── NearbyPlaces.tsx
│   ├── buy-sip-heal/
│   │   ├── Products.tsx
│   │   ├── ConsumersSriLanka.tsx
│   │   ├── ConsumersInternational.tsx
│   │   ├── BuyInBulk.tsx
│   │   └── WhereToTaste.tsx
│   ├── connect-heal/
│   │   ├── RestoreNature.tsx
│   │   ├── UpliftCommunities.tsx
│   │   ├── GrowCrops.tsx
│   │   ├── DevelopProducts.tsx
│   │   ├── JoinProgrammes.tsx
│   │   └── Donate.tsx
│   ├── our-story/
│   │   ├── AboutUs.tsx
│   │   ├── Gallery.tsx
│   │   ├── AwardsCertifications.tsx
│   │   └── ReviewsPress.tsx
│   ├── ContactPage.tsx
│   └── FAQPage.tsx
│
├── hooks/
│   ├── useForm.ts               # Form handling
│   ├── useModal.ts              # Modal state
│   ├── useMediaQuery.ts         # Responsive helpers
│   └── useScrollAnimation.ts    # Scroll effects
│
├── context/
│   ├── AppContext.tsx           # Global state
│   └── FormContext.tsx          # Form state management
│
├── services/
│   ├── emailService.ts          # Email notifications
│   └── analyticsService.ts      # GA4 tracking
│
├── styles/
│   ├── globals.css              # Global styles
│   ├── variables.css            # CSS custom properties
│   └── animations.css           # Animation keyframes
│
└── utils/
    ├── formatters.ts            # Data formatting
    ├── validators.ts            # Form validation
    └── constants.ts             # App constants
```

### 🧩 Core UI Components

#### Button Component Variants

```tsx
// Button.tsx Variants
<Button variant="primary">Book Your Visit</Button>      // Forest green, full
<Button variant="secondary">Learn More</Button>         // Outlined, subtle
<Button variant="accent">Order Now</Button>             // Gold accent
<Button variant="ghost">View Details</Button>           // Text only
<Button variant="whatsapp">Chat on WhatsApp</Button>    // WhatsApp green
```

#### Card Component Variants

```tsx
// Card.tsx Variants
<Card variant="default">...</Card>      // White bg, subtle shadow
<Card variant="featured">...</Card>     // Gold top border, hover lift
<Card variant="product">...</Card>      // Product image, price, CTA
<Card variant="testimonial">...</Card>  // Quote, avatar, rating
<Card variant="info">...</Card>         // Information highlight box
```

---

## 6. Page Structure

### 🏠 Home Page Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                         HEADER / NAVIGATION                        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                      HERO SECTION                             │  │
│  │  ● Full-width background image (tea garden/forest)           │  │
│  │  ● Brand tagline: "Healing One Forest, One Community..."     │  │
│  │  ● Primary CTA: "Visit & Heal" + Secondary: "Explore Teas"   │  │
│  │  ● Subtle scroll indicator animation                          │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                 FOUR JOURNEY CARDS                            │  │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │  │
│  │  │🌿 Visit │ │☕ Buy   │ │🤝Connect│ │📖 Story │              │  │
│  │  │& Heal   │ │Sip&Heal │ │& Heal   │ │         │              │  │
│  │  │         │ │         │ │         │ │         │              │  │
│  │  │ [CTA]   │ │ [CTA]   │ │ [CTA]   │ │ [CTA]   │              │  │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                 WHY KALEY SECTION                             │  │
│  │  ● "Because of Who We Are" - Mission statement               │  │
│  │  ● Key differentiators (organic, fairtrade, unique)          │  │
│  │  ● Photo/video background                                     │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                 TESTIMONIALS SECTION                          │  │
│  │  ● Carousel of visitor/customer reviews                      │  │
│  │  ● Photos + quotes + ratings                                  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                 CERTIFICATIONS BAR                            │  │
│  │  ● Organic certification logo                                 │  │
│  │  ● Fairtrade certification logo                               │  │
│  │  ● Other awards/badges                                        │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                  CTA BANNER                                   │  │
│  │  ● "Ready to experience Kaley?"                               │  │
│  │  ● Primary: "Plan Your Visit" + Secondary: "Shop Online"     │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                           FOOTER                                   │
└────────────────────────────────────────────────────────────────────┘
```

### 🌿 Visit & Heal Section Structure

```
┌────────────────────────────────────────────────────────────────────┐
│                         VISIT & HEAL                               │
│            "Do Nothing. Just Feel."                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │               HERO IMAGE (Tea Garden Panorama)                │  │
│  │               + Tagline + [Book Now] CTA                      │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                      EXPERIENCE CARDS                         │  │
│  │                                                               │  │
│  │  ┌──────────────────┐  ┌──────────────────┐                   │  │
│  │  │ 🌳 TOUR WITH US  │  │ 🏡 LIVE WITH US  │                   │  │
│  │  │                  │  │                  │                   │  │
│  │  │ ● Tea garden     │  │ ● 2+ days ideal  │                   │  │
│  │  │ ● Artisan watch  │  │ ● Farmhouse stay │                   │  │
│  │  │ ● Make your tea  │  │ ● Full experience│                   │  │
│  │  │ ● Forest trek    │  │                  │                   │  │
│  │  │                  │  │                  │                   │  │
│  │  │ [Learn More]     │  │ [Learn More]     │                   │  │
│  │  └──────────────────┘  └──────────────────┘                   │  │
│  │                                                               │  │
│  │  ┌────────────────────────────────────────┐                   │  │
│  │  │    🗺️ NEARBY PLACES OF INTEREST        │                   │  │
│  │  │    Explore attractions around Kaley    │                   │  │
│  │  │                [Explore]               │                   │  │
│  │  └────────────────────────────────────────┘                   │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                    BOOKING SECTION                            │  │
│  │                                                               │  │
│  │  ● Day tour / Half-day tour                                   │  │
│  │  ● Farmhouse stay (1+ nights)                                 │  │
│  │  ● Travel agent bookings                                      │  │
│  │                                                               │  │
│  │  [Fill Booking Form] ──→ Email confirmation                  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### ☕ Buy, Sip & Heal Section Structure

```
┌────────────────────────────────────────────────────────────────────┐
│                       BUY, SIP & HEAL                              │
│     "Healing One Forest, One Community and You..."                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                 PRODUCTS WE OFFER                             │  │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │  │
│  │  │ [Tea 1] │ │ [Tea 2] │ │ [Tea 3] │ │ [Herbs] │              │  │
│  │  │  Image  │ │  Image  │ │  Image  │ │  Image  │              │  │
│  │  │  Name   │ │  Name   │ │  Name   │ │  Name   │              │  │
│  │  │  Price  │ │  Price  │ │  Price  │ │  Price  │              │  │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘              │  │
│  │                                                               │  │
│  │  Filter: [All] [Black Tea] [Green Tea] [Herbal]               │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │              HOW TO BUY (By Location/Type)                    │  │
│  │                                                               │  │
│  │  ┌─────────────────┐  ┌─────────────────┐                     │  │
│  │  │ 🇱🇰 SRI LANKA    │  │ 🌍 INTERNATIONAL │                     │  │
│  │  │ ● WhatsApp shop │  │ ● Partner shops  │                     │  │
│  │  │ ● Retail stores │  │ ● Online stores  │                     │  │
│  │  └─────────────────┘  └─────────────────┘                     │  │
│  │                                                               │  │
│  │  ┌────────────────────────────────────────┐                   │  │
│  │  │ 📦 BUY IN BULK                          │                   │  │
│  │  │ For businesses, hotels, hospitals       │                   │  │
│  │  │ [Bulk Inquiry Form]                     │                   │  │
│  │  └────────────────────────────────────────┘                   │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │              WHERE TO TASTE KALEY TEA                         │  │
│  │  ● Map of restaurants/hotels serving Kaley Tea               │  │
│  │  ● List with addresses and contact info                       │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## 7. User Experience Flow

### 🔄 Primary User Journeys

#### Journey 1: Visit & Heal (Primary Focus)

```
┌─────────┐     ┌─────────────┐     ┌───────────────┐     ┌────────────┐
│  Home   │ ──▶ │ Visit &     │ ──▶ │ Tour/Live    │ ──▶ │ Booking    │
│  Page   │     │ Heal Landing│     │ Page         │     │ Form       │
└─────────┘     └─────────────┘     └───────────────┘     └────────────┘
                                                                │
                                                                ▼
                                                          ┌────────────┐
                                                          │ Email      │
                                                          │Confirmation│
                                                          └────────────┘
```

#### Journey 2: Buy, Sip & Heal

```
┌─────────┐     ┌─────────────┐     ┌───────────────┐
│  Home   │ ──▶ │ Buy, Sip &  │ ──▶ │ Products     │
│  Page   │     │ Heal Landing│     │ Catalog       │
└─────────┘     └─────────────┘     └───────────────┘
                                           │
                      ┌────────────────────┼────────────────────┐
                      ▼                    ▼                    ▼
               ┌────────────┐       ┌────────────┐       ┌────────────┐
               │ WhatsApp   │       │ Retail     │       │ Bulk Order │
               │ Shop (SL)  │       │ Store List │       │ Form       │
               └────────────┘       └────────────┘       └────────────┘
```

#### Journey 3: Connect & Heal

```
┌─────────┐     ┌─────────────┐     ┌───────────────┐     ┌────────────┐
│  Home   │ ──▶ │ Connect &   │ ──▶ │ Specific     │ ──▶ │Application │
│  Page   │     │ Heal Landing│     │ Pathway      │     │ Form       │
└─────────┘     └─────────────┘     │(Nature/Comm.)│     └────────────┘
                                    └───────────────┘            │
                                                                 ▼
                                                          ┌────────────┐
                                                          │ Email      │
                                                          │Confirmation│
                                                          └────────────┘
```

### 🎯 Conversion Points

| Page | Primary CTA | Secondary CTA |
|------|------------|---------------|
| Home | "Plan Your Visit" | "Explore Our Teas" |
| Visit & Heal | "Book Now" | "Learn More" |
| Tour with Us | "Book Your Tour" | "See Gallery" |
| Live with Us | "Reserve Your Stay" | "View Farmhouse" |
| Products | "Order on WhatsApp" | "Find Nearby Store" |
| Buy in Bulk | "Submit Inquiry" | "Call Us" |
| Connect & Heal | "Apply Now" | "Learn More" |
| Donate | "Make a Donation" | "Sponsor a Project" |

---

## 8. Technical Architecture

### 🏗️ Technology Stack

```
┌─────────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                     │
├─────────────────────────────────────────────────────────────────────┤
│  React 18+          │ TypeScript          │ TailwindCSS             │
│  UI Library         │ Type Safety         │ Utility CSS             │
│                     │                     │                         │
│  React Router       │ React Context       │ Framer Motion           │
│  Routing            │ State Management    │ Animations              │
├─────────────────────────────────────────────────────────────────────┤
│                         BACKEND                                      │
├─────────────────────────────────────────────────────────────────────┤
│  Node.js + Express  │ PostgreSQL          │ SendGrid/Nodemailer     │
│  API Server         │ Database            │ Email Service           │
├─────────────────────────────────────────────────────────────────────┤
│                       INFRASTRUCTURE                                 │
├─────────────────────────────────────────────────────────────────────┤
│  Vercel             │ CDN                 │ SSL/TLS                 │
│  Hosting            │ Asset Delivery      │ Security                │
│                     │                     │                         │
│  Google Analytics 4 │ Sentry              │ Cloudinary              │
│  Analytics          │ Error Tracking      │ Image Hosting           │
└─────────────────────────────────────────────────────────────────────┘
```

### 📊 Database Schema

```sql
-- Form Submissions
CREATE TABLE form_submissions (
    id SERIAL PRIMARY KEY,
    form_type VARCHAR(50) NOT NULL,  -- booking, inquiry, application, donation, contact
    data JSONB NOT NULL,
    email VARCHAR(255),
    status VARCHAR(20) DEFAULT 'pending',
    reference_number VARCHAR(20) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    category VARCHAR(50),
    price DECIMAL(10,2),
    image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Retail Partners
CREATE TABLE retail_partners (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50),  -- shop, restaurant, hotel
    location VARCHAR(100),  -- sri_lanka, international
    address TEXT,
    phone VARCHAR(50),
    website VARCHAR(255),
    coordinates POINT,
    is_active BOOLEAN DEFAULT true
);

-- Gallery Items
CREATE TABLE gallery_items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    type VARCHAR(20),  -- photo, video
    url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    category VARCHAR(50),
    display_order INT,
    is_active BOOLEAN DEFAULT true
);
```

### 🔌 API Endpoints

```
POST   /api/forms/booking          # Submit booking inquiry
POST   /api/forms/bulk-inquiry     # Submit bulk order inquiry
POST   /api/forms/application      # Submit volunteer/collaboration application
POST   /api/forms/donation         # Submit donation
POST   /api/forms/contact          # Submit contact form

GET    /api/products               # List all products
GET    /api/products/:slug         # Get product details

GET    /api/partners               # List retail partners
GET    /api/partners?location=x    # Filter by location

GET    /api/gallery                # List gallery items
GET    /api/gallery?category=x     # Filter by category
```

---

## 9. Form & Interaction Patterns

### 📝 Form Types & Fields

#### Booking Form (Visit & Heal)
```
┌─────────────────────────────────────────────────────────────────────┐
│                      BOOKING INQUIRY FORM                            │
├─────────────────────────────────────────────────────────────────────┤
│  Booking Type:   ○ Day Tour  ○ Half-Day Tour  ○ Farmhouse Stay      │
│                  ○ Travel Agent Booking                              │
├─────────────────────────────────────────────────────────────────────┤
│  Name:           [____________________________________]             │
│  Email:          [____________________________________]             │
│  Phone:          [____________________________________]             │
│  Country:        [Dropdown__________________________ ▼]             │
├─────────────────────────────────────────────────────────────────────┤
│  Preferred Date: [Date Picker_______________________]               │
│  Number of Guests: [1 ▼]                                            │
│  Special Requests: [Textarea________________________]               │
├─────────────────────────────────────────────────────────────────────┤
│                      [Submit Booking Inquiry]                        │
└─────────────────────────────────────────────────────────────────────┘
```

#### Bulk Inquiry Form (Buy, Sip & Heal)
```
┌─────────────────────────────────────────────────────────────────────┐
│                      BULK ORDER INQUIRY                              │
├─────────────────────────────────────────────────────────────────────┤
│  Buyer Type:     ○ Bulk Tea Buyer  ○ Organic Shop                   │
│                  ○ Restaurant/Hotel/Hospital  ○ Corporate Gifts     │
├─────────────────────────────────────────────────────────────────────┤
│  Company Name:   [____________________________________]             │
│  Contact Person: [____________________________________]             │
│  Email:          [____________________________________]             │
│  Phone:          [____________________________________]             │
│  Country:        [Dropdown__________________________ ▼]             │
├─────────────────────────────────────────────────────────────────────┤
│  Products Interested: [Multi-select_________________ ▼]             │
│  Estimated Quantity:  [____________________________________]        │
│  Additional Info:     [Textarea________________________]            │
├─────────────────────────────────────────────────────────────────────┤
│                      [Submit Inquiry]                                │
└─────────────────────────────────────────────────────────────────────┘
```

### 📧 Email Notification Flow

```
User Submits Form
       │
       ▼
┌────────────────┐
│ Form Validated │
│ Data Saved     │
└───────┬────────┘
        │
        ├────────────────────────────────────┐
        ▼                                    ▼
┌────────────────┐                  ┌────────────────┐
│ User Email     │                  │ Staff Email    │
│ Confirmation   │                  │ Notification   │
├────────────────┤                  ├────────────────┤
│ • Reference #  │                  │ • All details  │
│ • Submission   │                  │ • Reference #  │
│   summary      │                  │ • Reply link   │
│ • Next steps   │                  │                │
│ • Contact info │                  │                │
└────────────────┘                  └────────────────┘
```

### 💬 WhatsApp Integration

```typescript
// WhatsApp Click-to-Chat Implementation
const WHATSAPP_NUMBER = '+94XXXXXXXXX';

const generateWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

// Usage on Product Page
<WhatsAppButton
  message="Hi, I'm interested in ordering [Product Name]. Can you help?"
  variant="floating"
/>
```

---

## 10. Responsive Design Strategy

### 📱 Breakpoints

```css
/* BREAKPOINT SYSTEM */
--breakpoint-sm:  640px;   /* Small devices */
--breakpoint-md:  768px;   /* Tablets */
--breakpoint-lg:  1024px;  /* Laptops */
--breakpoint-xl:  1280px;  /* Desktops */
--breakpoint-2xl: 1536px;  /* Large screens */
```

### 📐 Layout Strategies

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navigation | Hamburger menu | Dropdown + icons | Full horizontal menu |
| Hero | Stacked, full-width | Centered, 80% width | Full-width with overlay |
| Journey Cards | 1 column, stacked | 2 columns | 4 columns grid |
| Product Grid | 1 column | 2 columns | 3-4 columns |
| Forms | Full-width, stacked | 2-column groups | Sidebar layout |
| Footer | Stacked accordion | 2 columns | 4 columns |

### 📱 Mobile-First Considerations

```
PRIORITY ORDER (Mobile First):
1. ✅ Core content visible without scrolling
2. ✅ Touch-friendly tap targets (min 44px)
3. ✅ Clear CTAs ("Book Now", "Order Now")
4. ✅ Collapsible navigation
5. ✅ Optimized images (WebP, responsive sizes)
6. ✅ Fast load times (<3s on 3G)
7. ✅ Thumb-reachable bottom navigation
8. ✅ Sticky WhatsApp button
```

---

## 11. Performance & Accessibility

### ⚡ Performance Targets

| Metric | Target | Importance |
|--------|--------|------------|
| First Contentful Paint (FCP) | < 1.5s | User perception |
| Largest Contentful Paint (LCP) | < 2.5s | Core Web Vital |
| Total Blocking Time (TBT) | < 200ms | Interactivity |
| Cumulative Layout Shift (CLS) | < 0.1 | Visual stability |
| Page Size | < 1.5MB | Mobile users |
| Time to Interactive (TTI) | < 3.5s | Usability |

### 🔧 Optimization Strategies

```
PERFORMANCE OPTIMIZATIONS:
┌─────────────────────────────────────────────────────────────────────┐
│ IMAGES                                                              │
│ ● WebP format with fallbacks                                        │
│ ● Responsive srcset (320w, 640w, 1024w, 1920w)                     │
│ ● Lazy loading below the fold                                       │
│ ● Next-gen compression (AVIF where supported)                       │
├─────────────────────────────────────────────────────────────────────┤
│ CODE                                                                │
│ ● Code splitting by route                                           │
│ ● Tree shaking unused code                                          │
│ ● Minification (CSS, JS)                                            │
│ ● Dynamic imports for heavy components                              │
├─────────────────────────────────────────────────────────────────────┤
│ DELIVERY                                                            │
│ ● CDN for static assets                                             │
│ ● Gzip/Brotli compression                                          │
│ ● Preloading critical resources                                     │
│ ● Service worker for caching                                        │
└─────────────────────────────────────────────────────────────────────┘
```

### ♿ Accessibility (WCAG 2.1 AA)

```
ACCESSIBILITY REQUIREMENTS:
┌─────────────────────────────────────────────────────────────────────┐
│ VISUAL                                                              │
│ ● Minimum contrast ratio 4.5:1 for text                            │
│ ● Focus indicators visible (3px solid outline)                      │
│ ● No information conveyed by color alone                            │
│ ● Text resizable up to 200% without breaking layout                │
├─────────────────────────────────────────────────────────────────────┤
│ NAVIGATION                                                          │
│ ● Keyboard navigable (Tab, Enter, Escape, Arrow keys)              │
│ ● Skip links to main content                                        │
│ ● Consistent navigation order                                       │
│ ● Clear focus management in modals                                  │
├─────────────────────────────────────────────────────────────────────┤
│ CONTENT                                                             │
│ ● Alt text for all images                                           │
│ ● ARIA labels for interactive elements                              │
│ ● Semantic HTML (header, main, nav, footer)                        │
│ ● Form labels and error messages                                    │
├─────────────────────────────────────────────────────────────────────┤
│ MOTION                                                              │
│ ● Respect prefers-reduced-motion                                    │
│ ● No auto-playing videos with sound                                 │
│ ● Pausable animations                                               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📋 Implementation Checklist

### Phase 1: Foundation (Week 1)
- [ ] Project setup (React + TypeScript + TailwindCSS)
- [ ] Design system implementation (colors, typography, spacing)
- [ ] Component library (Button, Card, Input, Modal)
- [ ] Layout components (Header, Footer, PageLayout)
- [ ] Database schema setup

### Phase 2: Core Pages (Week 2-3)
- [ ] Home page with hero and journey cards
- [ ] Visit & Heal section (3 pages)
- [ ] Buy, Sip & Heal section (5 pages)
- [ ] Navigation and routing

### Phase 3: Complete Pages (Week 3-4)
- [ ] Connect & Heal section (6 pages)
- [ ] Our Healing Story section (4 pages)
- [ ] Contact page
- [ ] FAQ page

### Phase 4: Backend & Forms (Week 4)
- [ ] Form components (Booking, Inquiry, Application)
- [ ] API endpoints
- [ ] Email notification system
- [ ] WhatsApp integration

### Phase 5: Polish & Launch (Week 5)
- [ ] Content loading
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Testing & QA
- [ ] Deployment

---

## 🎨 Visual Reference: Design Mockup

The Kaley Tea website should evoke:
- 🌿 **Forest tranquility** — Greens and natural textures
- ☕ **Warmth of tea** — Gold and terracotta accents
- 🌅 **Golden hour light** — Soft, warm ambiance
- 🍃 **Organic movement** — Subtle animations mimicking nature
- 🏔️ **Sri Lankan heritage** — Cultural authenticity

---

*Document Version: 1.0*
*Last Updated: December 24, 2025*
*Prepared for: Kaley Tea Website Development*
