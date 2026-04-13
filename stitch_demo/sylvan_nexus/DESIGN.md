# Design System Document: The Growth Ecosystem

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Arboretum"**

To move beyond the generic "startup hub" aesthetic, this design system adopts an **Editorial Growth** philosophy. We are not building a static website; we are cultivating a living ecosystem. The layout rejects the rigid, boxy constraints of traditional grids in favor of **Organic Asymmetry**. 

By utilizing intentional overlapping, generous white space (the "breath" of the forest), and a sophisticated hierarchy of layered surfaces, we convey a brand that is both deeply rooted (Professionalism) and rapidly evolving (Growth). The interface should feel like a premium digital journal—authoritative yet full of kinetic energy.

---

## 2. Color Theory: Tonal Depth
Our palette moves away from flat "web colors" toward a sophisticated, nature-inspired spectrum.

### The Palette
*   **Primary (Forest Core):** `#154212` (Primary) to `#2D5A27` (Primary Container). This is our anchor, representing stability and deep-rooted expertise.
*   **Secondary (Tech Kinetic):** `#0058bb` (Secondary) to `#1471e6` (Secondary Container). Used to inject modern "connectivity" and digital precision.
*   **Tertiary (Vitality Spark):** `#5E2B00` (Tertiary) to `#803E00` (Tertiary Container). Reserved for "Growth" moments and high-energy calls to action.
*   **Neutral (Earth & Air):** Using `#F9FAF2` (Background) as our canvas provides a warmer, more organic feel than pure white.

### Implementation Rules
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for defining sections. Structure must be created through background shifts (e.g., a `surface-container-low` section transitioning into `surface-container-highest`).
*   **The Glass & Gradient Rule:** For Hero sections and primary CTAs, use subtle linear gradients (Primary → Primary Container) at 135 degrees. For floating navigation or over-image cards, use **Glassmorphism**: `surface` color at 70% opacity with a `24px` backdrop-blur.
*   **Signature Textures:** Apply a 2% "noise" grain or a very subtle topographical map vector in the background of `surface-variant` sections to add "soul" and premium materiality.

---

## 3. Typography: Editorial Strength
We utilize **Plus Jakarta Sans** for its geometric clarity and modern "tech" edge, balanced with high-contrast sizing to create an editorial feel.

*   **Display (The Statement):** `3.5rem (Display-lg)` / Bold. Used for hero headlines. Tight letter-spacing (-0.02em) to create a "block" of power.
*   **Headline (The Narrative):** `2rem (Headline-lg)` / Semi-Bold. Used to introduce major ecosystem sections.
*   **Title (The Detail):** `1.125rem (Title-md)` / Medium. Used for card titles and sub-headers.
*   **Body (The Insight):** `1rem (Body-lg)` / Regular. Set with generous line-height (1.6) to ensure the "breathing room" requested in the brand personality.
*   **Label (The Metadata):** `0.75rem (Label-md)` / All Caps / Wide Letter Spacing (+0.05em). Used for small tags and status indicators.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use light and layering to create "presence."

*   **The Layering Principle:** 
    *   Level 0: `surface` (Base canvas)
    *   Level 1: `surface-container-low` (Content groupings)
    *   Level 2: `surface-container-lowest` (Interactive cards sitting on Level 1)
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use: `0px 20px 40px rgba(25, 28, 24, 0.06)`. The shadow must be large, diffused, and tinted with the `on-surface` color.
*   **The Ghost Border:** If accessibility requires a stroke, use `outline-variant` at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### 5.1 Status Labels (The Pulse)
Status tags use a "Soft-Fill" style: a high-transparency background with a high-contrast label.
*   **报名中 (Applying):** Background: `secondary-fixed` (Blue) | Text: `on-secondary-fixed-variant`.
*   **入选公示 (Shortlisted):** Background: `tertiary-fixed` (Orange) | Text: `on-tertiary-fixed-variant`.
*   **进行中 (In Progress):** Background: `primary-fixed` (Green) | Text: `on-primary-fixed-variant`.
*   **已结束 (Closed):** Background: `surface-variant` (Grey) | Text: `on-surface-variant`.
*   **Styling:** Radius: `full`. Padding: `4px 12px`. Typography: `label-md`.

### 5.2 Buttons
*   **Primary:** `primary` background with `on-primary` text. Use an 8px (`DEFAULT`) radius. Add a subtle inner-glow (1px top-border in 10% white) to give it a 3D "premium object" feel.
*   **Secondary:** `surface-container-highest` background. No border.
*   **Tertiary:** Transparent background with a `primary` text underline that expands on hover.

### 5.3 Program Cards
*   **Rule:** Forbid divider lines. Use `24px (xl)` padding and a background shift to `surface-container-low`.
*   **Image Handling:** Program images must use the `DEFAULT` (8px) radius. To emphasize "Growth," images can slightly break the container boundary (overlap) by -16px.

### 5.4 The "Growth" Input Field
*   **Style:** Minimalist. Only a bottom-weighted background (`surface-container-high`). When focused, the background transitions to `surface-container-highest` with a 2px `primary` bottom-bar. No full-box outlines.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use "Negative Space" as a design element. If a section feels crowded, increase the vertical margin rather than adding a divider.
*   **DO** use "Primary-Fixed" colors for decorative background blobs to create a sense of organic growth behind sharp content.
*   **DO** align text-heavy content to a centered, narrow column to mimic a premium magazine layout.

### Don’t
*   **DON'T** use pure black (#000) for text. Always use `on-surface` (#191C18) to maintain the organic, professional tone.
*   **DON'T** use "Standard" 4px roundness. Stick to the `DEFAULT` (8px) for a modern, friendly but professional look, or `full` for interactive chips.
*   **DON'T** use high-speed transitions. All hovers should be `300ms cubic-bezier(0.4, 0, 0.2, 1)` to feel fluid and "living."