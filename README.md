# Uplearn Packets — Strapi CMS

Structured learning packets for stock market education (Technical Analysis, FnO, NISM, Fundamental Analysis).

## Architecture

**3-tier hierarchy:** Packet → Levels → Courses → Modules

### Packet (Collection Type)
- Title, Short Description, YouTube Preview, Price, Slug
- "What you will be able to do" pointers
- Auto-calculated: total levels, courses, content hours, free courses

### Level (Component)
- Title, Individual Price, Thumbnail, What you will learn, Mentors, Courses

### Course (Component)
- Course Name, Free/Locked toggle, Modules, Auto-calculated duration

### Module (Component)
- Module Name, Duration (minutes)

## Prototype

Open `prototype.html` in a browser to see the interactive Strapi admin form prototype.

**Live preview:** [uplearn-packets.vercel.app](https://uplearn-packets.vercel.app)

## Setup

```bash
npm install
npm run develop
```

## Tech Stack
- Strapi v5
- SQLite (default)
- Node.js >= 20
