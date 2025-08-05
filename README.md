# SAIGBOX Landing Page

## Overview

This is the landing page for SAIGBOX - "The Future of Wise Email Management". The page was designed to showcase SAIGBOX's AI-powered email management capabilities with a modern, dark-themed interface featuring green accent colors.

## Design Philosophy

The landing page was created following a specific anatomy structure and design principles:

1. **Page Anatomy**: Based on the high-converting SaaS landing page structure (see `design-assets/screenshots/Screenshot-PageAnatomy.png`)
2. **Color Scheme**: Dark theme inspired by the SAIGBOX application interface (see `design-assets/screenshots/Screenshot-SAIG.png`)
3. **Hero Layout**: Inspired by modern dark-themed hero sections with gradient effects

## Key Design Elements

### Color Palette
- **Primary Dark**: `#1a1a24` (saig-dark-900)
- **Secondary Dark**: `#2e2e3e` (saig-dark-800)
- **Primary Green**: `#00af00` (saig-green-500/600)
- **Accent Green**: `#00d600` (saig-green-400)
- **AI Gradient**: From `#88eba2` to `#55b8ed`

### Typography
- **Display Font**: DM Sans (for headings)
- **Body Font**: Inter (for content)

### Special Features
- The letters "AI" in "SAIGBOX" have a gradient effect from light green to blue
- Glass morphism effects on certain elements
- Smooth animations and transitions
- Custom green scrollbar

## Project Structure

```
saigbox-landing-next/
├── app/
│   ├── globals.css        # Global styles and Tailwind directives
│   ├── layout.js          # Root layout with font configuration
│   └── page.js            # Main page component
├── components/
│   ├── Hero.js            # Hero section with navigation
│   ├── Benefits.js        # 2x2 grid benefits section
│   ├── HowItWorks.js      # Three-step process section
│   ├── Testimonials.js    # User testimonials
│   ├── FAQ.js             # Expandable FAQ section
│   ├── CTA.js             # Final call-to-action
│   └── Footer.js          # Footer with links
├── public/
│   └── Screenshot-SAIG.png # SAIGBOX app screenshot
├── design-assets/         # Design references and templates
│   ├── screenshots/       # Visual references
│   └── templates/         # Code templates used
└── README.md              # This file
```

## Section Breakdown

1. **Hero Section**
   - H1: "SAIGBOX" with gradient "AI" letters
   - H2: "The Future of Wise Email Management"
   - Primary CTA: "Get SAIGBOX Now"
   - Screenshot placeholder showing the SAIGBOX interface

2. **Benefits Section**
   - 2x2 grid layout
   - Four key benefits with icons and descriptions
   - Gradient backgrounds for visual appeal

3. **How It Works**
   - Three-step process
   - Numbered steps with connecting lines
   - Clear, concise explanations

4. **Testimonials**
   - Two testimonial cards
   - User avatars and credentials
   - Real-world use cases

5. **FAQ Section**
   - Expandable accordion items
   - Common questions addressed
   - Security, pricing, and features covered

6. **Final CTA**
   - Green gradient background
   - Strong call-to-action message
   - Prominent "Get SAIGBOX Now" button

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
The site will be available at `http://localhost:3000`

### Building for Production
```bash
npm run build
```

### Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_SITE_URL=https://saigbox.com
```

## Deployment to AWS Amplify

### For the Collaborating Developer

Since the Amplify app is in your AWS account, follow these steps:

1. **Connect Repository**
   - In AWS Amplify Console, create a new app
   - Choose "Host web app"
   - Connect to GitHub and select the `saigbox` repository
   - Choose the `main` branch

2. **Configure Build Settings**
   - Framework: Next.js - SSR
   - Build command: `npm run build`
   - Build output directory: `.next`

3. **Environment Variables**
   - Add `NEXT_PUBLIC_SITE_URL` with value `https://saigbox.com`

4. **Domain Setup**
   - Connect your `saigbox.com` domain
   - Configure SSL certificate
   - Set up www subdomain redirect if desired

### Build Specification
The project is configured for Next.js SSR deployment. Amplify should auto-detect the framework, but if needed, use this build spec:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Customization Notes

### Changing Colors
- Update the color definitions in `tailwind.config.js`
- The SAIGBOX green colors are under `saig-green`
- Dark theme colors are under `saig-dark`

### Modifying Content
- All section components are in the `components/` directory
- Text content can be updated directly in each component
- Benefits, testimonials, and FAQ items are defined as arrays for easy modification

### Adding Sections
1. Create a new component in `components/`
2. Import and add it to `app/page.js`
3. Follow the existing pattern for consistent styling

## Technical Decisions

1. **Next.js 14 with App Router**: Modern React framework with SSR capabilities
2. **Tailwind CSS**: Utility-first CSS framework for rapid development
3. **Headless UI**: Unstyled, accessible UI components
4. **Hero Icons**: Consistent icon library
5. **Component-based Architecture**: Each section is a separate component for maintainability

## Performance Considerations

- Images are optimized and served from the public directory
- Fonts are loaded via Next.js font optimization
- CSS is purged and minified in production
- Components are server-rendered for better SEO

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Smooth scrolling with fallback
- Accessible navigation and interactive elements

## Contact

For questions about the landing page implementation, please refer to this README or the inline code comments. The design follows standard Next.js and Tailwind CSS patterns.