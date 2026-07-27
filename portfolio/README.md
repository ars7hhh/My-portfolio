# Saheed Arshad — Portfolio

A minimal, light 3D portfolio built with React, Three.js (via react-three-fiber), and Tailwind CSS. All content (skills, projects, experience, education, certifications, achievements) is sourced directly from Saheed's CV and LinkedIn export — nothing invented.

## Design

- **Theme:** black, white & neon blue — near-black background, electric blue accent/glow, frosted glassmorphic cards
- **Opening sequence:** two full-screen scroll-linked screens before the main content —
  1. your name animates in letter-by-letter with a pulsing blue glow orb
  2. "Let's know more about me" — a second full-screen beat that eases the visitor into the rest of the site
  Both dissolve (blur/fade/scale) as you scroll past them.
- **Closing sequence:** a matching full-screen "Let's Connect" finale at the end, with the same big animated-text treatment, followed by your contact links and CV buttons.
- **Interaction:** a soft cursor-following blue glow spotlight follows the mouse across the page (desktop only), and every card/button/tag/nav-link glows blue on hover or focus.
- **Signature motif:** an interactive, glowing 3D neural network in the hero (drag to rotate) in neon blue/cyan tones, with data pulses traveling along its edges
- **Type:** Bricolage Grotesque (display), Manrope (body), JetBrains Mono (labels/data)
- **Photo:** your real headshot, boxed in a glass frame with a subtle tilt-on-hover effect (`src/assets/saheed.png`)
- **Certificates:** your three real certificate PDFs are converted to images and shown in the Certificate Gallery — click any one to view it full-size in a lightbox (`src/assets/certs/`)
- **Creative tools:** a dedicated Skills card for CapCut, Snapseed, PicsArt, and VN Video Editor, each with an icon badge (PicsArt uses its real logo; the others use representative badges since official marks aren't available as open assets)
- **Footer:** GitHub and Email as text links, LinkedIn as a small icon button (not a link to any text elsewhere)

## Tech stack

- React 19 + Vite
- Three.js + `@react-three/fiber` + `@react-three/drei` — the hero's 3D node graph
- Framer Motion — scroll reveals and micro-interactions
- Tailwind CSS v4

## Project structure

```
src/
  data/portfolioData.js   ← all resume content lives here — edit this file to update text
  components/
    Navbar.jsx
    Hero.jsx / HeroScene.jsx   ← 3D canvas
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx           ← experience + education timeline
    Certifications.jsx       ← certifications + achievements
    Contact.jsx
    Footer.jsx
    SectionHeading.jsx
public/
  Saheed_Arshad_CV.pdf   ← wired to the "Download CV" buttons
  favicon.svg
```

## Local development

```bash
npm install
npm run dev
```

## Adding your photos

Drop image files into `src/assets/` (create the folder), import them in the relevant component (e.g. `About.jsx` for a headshot, or replace parts of the hero), and reference with a normal `<img src={...} />` or as a background. The current build has no photos — you said you'd add these separately, so no placeholders were left in the layout that assume a photo exists.

## Updating content later

Everything text-based lives in `src/data/portfolioData.js` — edit that one file for new projects, skills, experience, etc. and every section updates automatically. For future changes, just describe what you want updated in chat and push the new code.

## Deploying to Vercel

1. Push this project to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ars7hhh/YOUR_REPO_NAME.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), click **Add New → Project**, and import the GitHub repo.
3. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every future push to `main` auto-redeploys.

## Notes

- Contact section links to email, WhatsApp, GitHub, and LinkedIn — all pulled from your CV.
- Both "Preview CV" (opens the PDF in a new tab) and "Download CV" (downloads it) buttons are wired to `public/Saheed_Arshad_CV.pdf`.
- Reduced-motion is respected; all interactive elements have visible keyboard focus states.
