Here you gooo 🎉 — drop this in `README.md` at the root of your repo:

````markdown
# Tiny Chaos – Fun One-Page Starter

A stupidly simple, slightly chaotic one-page template built with **HTML**, **CSS**, and **vanilla JavaScript**.

It’s perfect for:

- quick landing pages  
- playful personal sites  
- prototypes where you want vibes *now* and structure later  

No build step. No frameworks. Just vibes.

---

## 🔧 Tech Stack

- **HTML5** – semantic one-page layout  
- **CSS3** – custom properties, responsive layout, soft neon aesthetic  
- **JavaScript (vanilla)** – for quips, mood toggling, and fake CTA interaction  
- **Fonts** – system stack (`system-ui, -apple-system, BlinkMacSystemFont, "Inter", sans-serif`)

---

## ✨ Features

- 🧱 **Single-page layout**  
  Sections for Hero, About, Features, and CTA.

- 🎭 **Witty microcopy & quip generator**  
  A “Make Me Laugh” button that cycles through fun quips.

- 🌡 **Mood system**  
  A “Good Vibes” button that cycles page moods:
  - `chill`
  - `chaotic`
  - `productive`  
  Each mood updates the accent color via `body[data-mood]`.

- 🎛 **Reusable structure**  
  Easy to reskin for:
  - a personal landing page  
  - a small product  
  - a portfolio teaser  
  - a fictional character page (dev, tattoo artist, musician, etc.)

---

## 📁 Project Structure

```bash
.
├── index.html          # Main page
└── src/
    ├── styles.css      # All styling, variables, responsive rules
    └── script.js       # Mood system + quip generator + interactivity
````

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/codelikeagirl29/tiny-chaos.git
cd tiny-chaos
```

### 2. Open it locally

You don’t need a dev server for this to work, but it’s nicer with one:

#### Option A – Just open the file

* Double-click `index.html`
  or
* Right-click → **Open With** → your browser

#### Option B – Use a simple local server (recommended)

With Python:

```bash
# Python 3
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## 🎨 Customization Guide

Open `index.html` and look for:

* **Site name / logo**

  ```html
  <div class="logo">✨ Tiny Chaos</div>
  ```

* **Navigation links**

  ```html
  <nav class="nav">
    <a href="#hero">Home</a>
    <a href="#about">About</a>
    <a href="#features">Why Tho?</a>
    <a href="#cta">Get Started</a>
  </nav>
  ```

* **Hero copy**

  ```html
  <h1>Minimal effort. Maximum main-character energy.</h1>
  <p class="hero-text">
    A basic layout with just enough personality...
  </p>
  ```

Edit those to match your project, product, or persona.

### Colors & Mood

In `styles.css`, the main colors live in `:root`:

```css
:root {
  --bg: #050816;
  --bg-alt: #070b1a;
  --card: rgba(255, 255, 255, 0.04);
  --accent: #ffb347;
  --accent-soft: rgba(255, 179, 71, 0.12);
  --text-main: #f9fafb;
  --text-muted: #a5b4fc;
}
```

Moods are controlled via `body[data-mood]`:

```css
body[data-mood="chill"] {
  --accent: #7dd3fc;
}

body[data-mood="chaotic"] {
  --accent: #fb7185;
}

body[data-mood="productive"] {
  --accent: #a3e635;
}
```

You can add more moods or change colors however you want.

### Quips & Vibes

In `./src/script.js`, update the arrays:

```js
const quips = [
  "You absolutely deserve a website this dramatic.",
  "Look at you, building things instead of just thinking about them.",
  // add more here…
];

const vibes = [
  "“Trying my best (kinda)”",
  "“Main character with side quests”",
  // add more here…
];
```

---

## 📦 Deploying

### GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under “Branch”, select `main` (or `master`) and `/root`.
4. Save and wait a minute or two.
5. Your site will be live at:
   `https://codelikeagirl29.github.io/tiny-chaos/`

### Other Options

* **Netlify** – drag & drop the folder or connect the repo.
* **Vercel** – import the repo and select `index.html` as the entry point.
* Any static hosting works.

---

## 🧪 Ideas for Extensions

* Add a **“Testimonial”** or “What People Say” section
* Add a **Projects / Work** grid
* Swap copy to fit:

  * a tattoo studio
  * a musician EP site
  * a web dev portfolio
  * a character landing page (like your Ryder site)
