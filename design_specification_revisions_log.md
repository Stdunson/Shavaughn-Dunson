# Shavaughn Dunson Portfolio — Design Specification & Revision History

## 1. Project Overview & Identity
- **Owner**: Shavaughn Dunson.
- **Core Theme**: High-pressure distributed software engineering merged with basketball hardwood tactical court vision.
- **Design System**: Hardcourt Obsidian (`#10131a` dark obsidian background, `#ff7a00` electric court orange accent, Space Grotesk typography, subtle tactical court floor geometries and linework).

---

## 2. Chronological Log of Revisions & Tweaks

### Session 0: Initial Vision & Identity Setup
- **User Prompt**: Establish a personal portfolio with uploaded reference photos (headshot in tie, night street shot in Chinatown) and a basketball court playbook concept featuring interactive representations with and without the ball.
- **Visual Identity**: Established the "Hardcourt Obsidian" design system, dark palette, and tactical court aesthetic.

### Session 1: Main Page & Basketball Court Hub
- **User Prompt**: "Start with the Main Page & Basketball Court Hub."
- **Outcome**: Created the initial desktop layout with personal bio, Prairie View A&M education card, lifestyle & technical architecture split columns, and initial basketball court framework.

### Session 2: 3D Court, Pocoyo Sprites & Layout Expansion
- **User Feedback & Request**:
  - Transition from 2D mockup to a 3D court with 3D sprites catching and passing the ball.
  - Character aesthetic style reference provided: Pocoyo cartoon clay/3D style (soft, friendly, distinct shapes).
  - Expanded layout so "Interests & Floor Run" and "Technical Architecture" share full width together across the screen.
- **Outcome**: Implemented Three.js WebGL canvas containing procedural stylized characters, ball-passing physics, and wide balanced grid layouts.

### Session 3: Hoop Addition & 5-Out Tactical Positioning
- **User Feedback & Request**:
  - Add a 3D basketball hoop and backboard onto the court.
  - Fix player tactical positions strictly to a 5-out basketball offense:
    - **1**: Top of key (Point Guard &rarr; Home Page)
    - **2**: Right wing (Shooting Guard &rarr; Experience Page)
    - **3**: Left wing (Small Forward &rarr; Projects Page)
    - **4**: Left block (Power Forward &rarr; Blog Page)
    - **5**: Right block (Center &rarr; Contact Page)
- **Outcome**: Modeled backboard, rim, and net on the court; positioned the 5 stylized roster nodes according to the exact 5-out offensive spacing.

### Session 4: Playbook Readout & Glitch Resolution
- **User Feedback & Request**:
  - Stop the dynamic readout from glitching between complex tactical set names ("1-4 Inside-Out / Horns Formation") and hover states.
  - Lock readout structure strictly to:
    - **Ball Handler**: Position index + Position name (e.g., `1 - Point Guard`).
    - **Playbook Action**: Target page destination (e.g., `Home Page`, `Projects Page`).
  - Keep default ball handler at `1 - Point Guard` / `Home Page` and reset cleanly upon cursor leave.
- **Outcome**: Cleaned JavaScript state machine, eliminated flickering tactical badges, and enforced uniform readout metrics.

### Session 5 & 6: Blog Section Overhaul (Simplification & De-cluttering)
- **User Feedback & Request**:
  - Initial blog build had too much clutter: stats tickers, reading times, category pills, search bar, author access lock button, newsletter form.
  - Exact directive: *"There's way too much going on. I want a simple scroll view, with different blog posts above/below each other. I want them to only have the title and description. All this extra stuff... it can all go. Same with the title n such. Just say Shavaughn's Tech Blog."*
- **Outcome**:
  - Title stripped down to clean **"Shavaughn's Tech Blog"**.
  - Vertical list layout (cards stacked directly above/below).
  - All tags, timestamps, reading times, search inputs, and newsletter boxes removed.
  - Card contents strictly constrained to **Title** and **Description**.

### Session 7: Singular Blog Post (Reading View)
- **User Feedback & Request**:
  - Show what a singular blog post looks like once clicked.
- **Outcome**:
  - Produced dedicated reader view for *"Architecting for Late-Clock Composure: Microservices Under High Pressure"*.
  - Added clean `← Back to Dispatches` top navigation link.
  - High-contrast, focused editorial typography with embedded Go circuit-breaker snippet and court principle callout card.

### Session 8: Projects Page
- **User Feedback & Request**:
  - Acknowledge reader view direction ("Still a lot going on, but I like the general idea") and request the **Projects** page.
- **Outcome**:
  - Designed clean showcase for flagship software and interactive engineering works:
    1. **FloorVision**: High-throughput WebGL & spatial player tracking engine.
    2. **LateClock**: Distributed resilient circuit breaker for microservices.
    3. **SneakerDrop Engine**: Headless low-latency inventory scraper and webhook dispatcher.
    4. **Tactical 3D Playbook Hub**: Interactive browser court playbook.
  - Integrated tech tags, repository links, demo triggers, and unified top/bottom navigation.

---

## 3. Design Principles & Guidelines Established

1. **Restraint & Minimalist Hierarchy**:
   - Avoid decorative clutter, unnecessary stat widgets, or excessive badge clusters.
   - When presenting lists (blog posts or projects), prioritize clear vertical scanning with clean titles and concise descriptions.

2. **Tactical Court Integration**:
   - Subtle geometric floor lines (three-point arcs, lane keys, center circle) used as background ambient accents.
   - Interactive 3D court operates as both an interactive physics toy and an intuitive 5-out spatial navigation menu.

3. **Color & Typography System**:
   - **Backgrounds**: Obsidian Dark (`#10131a`, `#191b23`, `#0b0e15`).
   - **Accents**: Hardcourt Amber/Orange (`#ff7a00`) for primary focal points, active states, and CTAs.
   - **Typography**: Space Grotesk / Inter for modern monospace-feel technical headers and legible body copy.
