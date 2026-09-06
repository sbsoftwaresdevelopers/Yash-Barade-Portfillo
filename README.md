# Yash Barade — Premium 3D Animated Portfolio & Agency Website

A modern, highly interactive, production-grade 3D animated personal portfolio website built for **Yash Barade** (Web Developer & Founder) and his agency **SB SOFTWARES DEVELOPERS**.

---

## 🌟 Highlights & Features

- **Personal Brand & Agency Dual Positioning**:
  - Positions **Yash Barade** as a serious Web Developer, Custom Software Developer, Digital Marketer & Founder.
  - Dedicated flagship showcase for **SB SOFTWARES DEVELOPERS** featuring the official 3D glowing logo.
- **Authentic Assets Integrated**:
  - Official professional photo of Yash Barade (`assets/images/yash-barade.jpg`) with a 3D holographic glass frame and orbiting badges.
  - Official SB SOFTWARES DEVELOPERS logo (`assets/images/sb-softwares-logo.jpg`) with ambient cyber glow.
- **Modern 3D & Interactive Physics**:
  - **Interactive 3D Constellation Mesh**: Custom canvas engine with mouse parallax, particle connections, and smooth velocity damping.
  - **3D Card Tilt**: Dynamic mouse-tilt angle calculation with realistic specular glare.
  - **Floating Holographic Badges**: Orbiting around the hero portrait.
- **High-Converting Lead Funnel**:
  - Two contact channels (Personal Contact & Agency Contact).
  - Interactive Contact Form with client-side validation.
  - **Instant 1-Click WhatsApp Chat Button**: Auto-populates the prospect's name, email, project type, and message directly into a WhatsApp chat with Yash (`+91 8390834469`).
  - Active links to Personal Instagram and Agency Instagram.
- **100% Responsive & Zero Dependencies**:
  - Smooth on mobile phones, tablets, laptops, and ultra-wide screens.
  - Mobile slide-over drawer with animated hamburger toggle.
  - Lightweight, fast loading, accessible, and SEO-optimized.

---

## 📁 Project Structure

```
d:\Antigravity\portfolio\
├── index.html                     # Semantic HTML5 markup with all sections & SEO tags
├── assets\
│   ├── css\
│   │   └── style.css              # Dark theme design system, 3D transforms, glassmorphism
│   ├── js\
│   │   ├── three-bg.js            # Interactive 3D particle constellation canvas engine
│   │   ├── tilt.js                # 3D card tilt & parallax physics
│   │   └── main.js                # Navigation, mobile menu, filter tabs, WhatsApp builder
│   └── images\
│       ├── yash-barade.jpg        # Yash's official professional photo
│       ├── sb-softwares-logo.jpg  # SB Softwares Developers official 3D logo
│       └── projects\              # Project preview assets & vectors
└── README.md
```

---

## 🚀 How to Run Locally

You can open `index.html` directly in any modern browser, or run a local lightweight web server:

### Option 1: Python HTTP Server (Recommended)
```powershell
cd d:\Antigravity\portfolio
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option 2: VS Code Live Server
Right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ How to Customize & Edit

### 1. Adding or Editing Projects
In `index.html`, locate the `<!-- PROJECTS SECTION -->` block. Each project card is clearly marked:
```html
<div class="glass-card project-card" data-category="web" data-tilt data-tilt-max="8">
  <div class="project-thumb">
    <img src="assets/images/projects/your-project-image.jpg" alt="Project Title" />
    <span class="project-badge-tag">Web Development</span>
  </div>
  <div class="project-body">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-desc">Description of the project...</p>
    ...
```

### 2. Updating Contact or Social Media Links
All contact points are centralized in:
- Navigation bar (`#navbar`)
- Hero section (`#home`)
- Agency showcase (`#agency`)
- Connect banner (`.connect-section`)
- Contact form & details (`#contact`)
- Footer (`.site-footer`)

### 3. Deploying to the Web (Free & Instant)
- **Vercel / Netlify**: Simply drag and drop the `d:\Antigravity\portfolio` folder or link your GitHub repo.
- **GitHub Pages**: Push this repository to GitHub, go to **Settings > Pages**, and set the source branch to `main`.
