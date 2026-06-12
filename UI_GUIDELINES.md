# UI & Design Guidelines - Bristo Cafe Website

This document outlines the UI specifications mapped from the Figma design parameters.

## Visual Tone & Mood
* **Tone**: Luxury, cozy, warm, and modern cafe aesthetic. 
* **Design Grid**: Adhering strictly to the **8pt grid system** (spacings in increments of 8px: 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, etc.).

## Color Palette
All color values are defined in the CSS custom properties and used as Tailwind utilities:
* **Primary 1** (`--color-primary-1`): `#65451F` (Rich Warm Coffee Brown)
* **Primary 2** (`--color-primary-2`): `#765827` (Golden Brown Accent)
* **Secondary 1** (`--color-secondary-1`): `#D5C09A` (Muted Champagne/Gold)
* **Secondary 2** (`--color-secondary-2`): `#F5E2CC` (Soft Cream/Beige)
* **White Cream** (`--color-white-cream`): `#F9F6F1` (Warm Milk/Off-white Background)
* **Black Warm** (`--color-black-warm`): `#1E1C1B` (Charcoal Black Base)
* **Black Opacities** (for overlays, borders, secondary text):
  * `black-75`: `rgba(30, 28, 27, 0.75)`
  * `black-50`: `rgba(30, 28, 27, 0.50)`
  * `black-25`: `rgba(30, 28, 27, 0.25)`
  * `black-10`: `rgba(30, 28, 27, 0.10)`
  * `black-5`: `rgba(30, 28, 27, 0.05)`
* **Gradient**: Linear from `primary-1` to `secondary-1` (`bg-gradient-to-r from-primary-1 to-secondary-1`)

## Typography
* **Headings**: `Playfair Display`, serif (font weight: 500)
* **Paragraphs/Body**: `Open Sans`, sans-serif (font weight: 300 / 400 / 600)
* **Accent**: `Pacifico`, cursive

### Sizes & Breakpoints
* Typography is fluid and scales seamlessly using `clamp()` utilities. Avoid hardcoded fixed pixel values or manual `@media` breakpoint jumps.
* **H1** (`text-h1`): Fluid from ~56px (mobile) to ~105px (desktop)
* **H2** (`text-h2`): Fluid from ~48px (mobile) to ~84px (desktop)
* **H3** (`text-h3`): Fluid from ~36px (mobile) to ~67px (desktop)
* **H4** (`text-h4`): Fluid from ~28px (mobile) to ~53px (desktop)
* **H5** (`text-h5`): Fluid from ~24px (mobile) to ~43px (desktop)
* **H6** (`text-h6`): Fluid from ~20px (mobile) to ~34px (desktop)
* **Body** (`text-body`): Fluid from ~16px (mobile) to ~21px (desktop)
* **Body Bold** (`text-body-bold`): Same as body, with font-semibold/bold
* **Accent** (`text-accent`): Fluid from ~48px (mobile) to ~64px (desktop)

## Spacing & Layout
* **Max Width**: `max-w-[1440px]` or `max-w-7xl` for inner containers.
* **Section Spacing**:
  * Utilize fluid padding for vertical section spacing instead of explicit breakpoints.
  * Example: `py-[clamp(4rem,10svh,8rem)]` to scale dynamically.
* **Height Management**: Never use explicit `height` on responsive sections. Use `min-h-[100svh]` for full screen, or `aspect-ratio` for media blocks.

## UI Elements
* **Buttons**:
  * **Primary**: Filled brown background (`bg-primary-1 text-white-cream hover:bg-primary-2 px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300`)
  * **Secondary**: Outline style (`border border-primary-1 text-primary-1 hover:bg-primary-1 hover:text-white-cream px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300`)
* **Inputs**:
  * Rounded, thin border (`border border-black-25 focus:border-primary-1 bg-transparent px-4 py-3 rounded-md text-sm outline-none transition-colors`)
* **Card Style**:
  * Glassmorphism or simple warm background card (`bg-white-cream border border-black-5 shadow-sm hover:shadow-md transition-shadow p-6 rounded-lg`)
