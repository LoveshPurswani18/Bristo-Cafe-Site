# Coding Rules & Workflows - Bristo Cafe Website

To maintain consistency and high code quality, follow these instructions for every session:

## 1. Session Start Command
At the beginning of every session, when the user says **"Read all docs and resume."**, you must:
1. Read all 6 files: `PRD.md`, `ARCHITECTURE.md`, `TASKS.md`, `UI_GUIDELINES.md`, `CONTENT.md`, `RULES.md`.
2. Report the current state in exactly 3 lines:
   * **Line 1**: What's already built
   * **Line 2**: What the current task is
   * **Line 3**: Any known issues

## 2. Styling Rules
* **Tailwind only**: Never use raw CSS style sheets (except for `@import` and custom theme variable definitions in `src/index.css`).
* **Design Token Reference**: Never hardcode colors or sizes. Always reference color classes mapped from the custom properties in `UI_GUIDELINES.md` (e.g. `bg-primary-1`, `text-secondary-1`, `font-heading`).
* **No inline styles**: Do not write `style={{ ... }}` in React JSX.

## 3. Content Integrity
* **No fake content**: Never invent copy, prices, items, or details. Pull everything directly from `CONTENT.md`.
* **Placeholders**: If Figma content is missing or not provided, mark it clearly in code and `CONTENT.md` as `[TODO: ...]` rather than using generic dummy data.

## 4. Dependencies & Files
* **Ask first**: Never run `npm install` for a new package without explicitly asking the user first.
* **Component-focused**: Follow the Single Responsibility Principle. Build small, reusable, well-commented React components.
* **Images directory**: Save all image assets in `/src/assets/images/` with descriptive, lower-case filenames (e.g. `hero-bg.jpg`, `latte-art.png`).

## 5. Responsive Design Principles
* **Fluid over Fixed**: Use fluid typography (`clamp()`) and fluid spacing instead of managing explicit pixel sizes across breakpoints.
* **Intrinsic Grids**: Rely on content-based intrinsic layouts. Use `grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))]` instead of brittle, hardcoded breakpoints like `md:grid-cols-3`.
* **Dynamic Viewports**: Use `svh` or `dvh` for full-screen elements instead of fixed heights to maintain layout integrity across all devices.
* **Container Queries**: Prefer `@container` and style queries for component-level adaptations rather than global viewport media queries when possible.
* Adhere strictly to the 8pt grid system for baseline alignments.

## 6. Documentation Sync Workflow
* After completing a section from Figma, immediately update `TASKS.md`, `UI_GUIDELINES.md`, and `CONTENT.md` to reflect any new assets, colors, sizes, or copy.
* Document files must align with `ARCHITECTURE.md` folder layouts.
