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
* **H1**: Desktop `105px` / Tablet `92px` / Mobile `56px`
* **H2**: Desktop `84px` / Tablet `72px` / Mobile `48px`
* **H3**: Desktop `67px` / Tablet `58px` / Mobile `36px`
* **H4**: Desktop `53px` / Tablet `45px` / Mobile `28px`
* **H5**: Desktop `43px` / Tablet `36px` / Mobile `24px`
* **H6**: Desktop `34px` / Tablet `24px` / Mobile `20px`
* **Body (P)**: Desktop `21px` (lh `32px`) / Tablet `16px` (lh `28px`)
* **Body Bold (P - Bold)**: Desktop `21px` (lh `32px`) / Tablet `16px` (lh `28px`) with font-semibold/bold
* **Accent Text**: Desktop `64px` / Tablet `48px` (lh `32px`)

## Spacing & Layout
* **Max Width**: `max-w-7xl` (1280px) for inner containers.
* **Section Spacing**:
  * Desktop padding: `py-24` (96px) or `py-32` (128px)
  * Mobile padding: `py-12` (48px) or `py-16` (64px)

## UI Elements
* **Buttons**:
  * **Primary**: Filled brown background (`bg-primary-1 text-white-cream hover:bg-primary-2 px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300`)
  * **Secondary**: Outline style (`border border-primary-1 text-primary-1 hover:bg-primary-1 hover:text-white-cream px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300`)
* **Inputs**:
  * Rounded, thin border (`border border-black-25 focus:border-primary-1 bg-transparent px-4 py-3 rounded-md text-sm outline-none transition-colors`)
* **Card Style**:
  * Glassmorphism or simple warm background card (`bg-white-cream border border-black-5 shadow-sm hover:shadow-md transition-shadow p-6 rounded-lg`)
