# Dussehra Snack Stall Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern food delivery platforms and festival e-commerce sites, emphasizing vibrant imagery and festive cultural elements while maintaining clean, mobile-first navigation.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Black: 0 0% 8% (main backgrounds)
- Rich Gold: 45 95% 60% (primary accent, text highlights)
- Warm Gold: 42 88% 70% (secondary accent, borders)

**Supporting Colors:**
- Pure White: 0 0% 100% (primary text, cards)
- Soft Cream: 45 20% 95% (card backgrounds)
- Deep Orange: 25 100% 50% (festival accents, marigold elements)

### B. Typography
**Primary Font**: Poppins (Google Fonts) - modern, readable
**Secondary Font**: Merriweather (Google Fonts) - for taglines
- Hero heading: 48px bold
- Section headings: 32px semibold
- Product names: 24px medium
- Body text: 16px regular
- Prices: 20px bold in gold

### C. Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16
- Container max-width: 1200px
- Section padding: py-16, px-6
- Card spacing: gap-8
- Element margins: mb-6, mt-4

### D. Component Library

**Header/Banner**:
- Full-width black background with subtle gold gradient overlay
- "SNACKY & JUICY" in large gold typography
- Subtext in white with gold underline accent

**Product Cards**:
- Large circular images (200px diameter) with gold border
- White card backgrounds with subtle shadow
- Product name, description, and price in structured layout
- Hover effect: gentle scale and shadow increase

**Festive Decorations**:
- Marigold borders using CSS patterns in orange/gold
- Small diya icons scattered using absolute positioning
- Subtle rangoli corner patterns
- Durga silhouette as background watermark (opacity 0.1)

**Navigation**:
- Sticky header with smooth scrolling to sections
- Mobile hamburger menu with festival-themed animations

### E. Animations
**Minimal Approach**:
- Subtle fade-in on scroll for product cards
- Gentle hover transforms for interactive elements
- No distracting animations that compete with content

## Section Structure

1. **Hero Banner**: Black background with gold text, festive border patterns
2. **Tagline Section**: Centered typography with decorative elements
3. **Product Grid**: 2x2 grid (mobile: single column) with circular food images
4. **Combo Offers**: Secondary grid highlighting package deals
5. **Footer**: Call-to-action with festival messaging and contact details

## Images

**Hero Background**: Subtle Durga silhouette watermark, semi-transparent
**Product Images**: Four large circular photos:
- Masala lemonade with mint garnish
- Bhel puri/marmarlu masala with colorful toppings
- Raw mango slices with red chili powder
- Peanut masala with fresh garnishes

**Decorative Elements**: Small diya icons, marigold flower patterns, geometric rangoli designs as CSS-generated graphics or simple SVGs

## Mobile Responsiveness
- Single-column layout on mobile
- Larger touch targets for buttons
- Optimized image sizes for faster loading
- Collapsed navigation with festival-themed menu icon

This design balances traditional festival aesthetics with modern web standards, ensuring both cultural authenticity and contemporary user experience.