# Artist Dashboard - EVEN Technical Challenge

A modern music artist dashboard built with Next.js 14, featuring sales analytics, release tracking, and fan engagement metrics.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Charts:** Nivo (@nivo/bar, @nivo/line, @nivo/pie)

## Features

### Core Features
- **Recent Releases** - Grid view of music releases with filtering by type (Album, EP, Single)
- **Sales Analytics** - Interactive charts with:
  - Multiple metrics (Streams, Downloads, Revenue)
  - Time range filters (Weekly, Monthly, Yearly)
  - Chart type toggle (Bar, Line)
- **Fan Engagement** - Platform performance, revenue distribution, and top listening countries

### Design
- Minimalist design with EVEN brand colors (#dc3228, grayscale)
- Fully responsive (mobile + desktop)
- Clean, modern UI with shadcn/ui components

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + EVEN theme
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main dashboard page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── header.tsx       # Artist header with stats
│   ├── recent-releases.tsx
│   ├── sales-chart.tsx
│   └── fan-engagement.tsx
└── lib/
    ├── mock-data.ts     # Mock data + utility functions
    └── utils.ts         # shadcn utilities
```

## Technology Choices

| Choice | Reasoning |
|--------|-----------|
| Next.js 14 | Required by challenge, excellent for SSR/SSG |
| Tailwind CSS v4 | Rapid styling, built-in with Next.js |
| shadcn/ui | High-quality, customizable components |
| Nivo | Rich visualization library with excellent customization |

## What I'd Do With More Time

- [ ] Add Playwright E2E tests for critical flows
- [ ] Implement dark mode toggle
- [ ] Add more micro-interactions and animations
- [ ] Create a trends comparison feature
- [ ] Add skeleton loading states
- [ ] Implement real-time data simulation
- [ ] Add export functionality for charts
- [ ] Mobile navigation improvements

## Live Demo

[Deployed on Vercel] - *TODO: Add link after deployment*

---

## AI Usage Documentation

See [AI_USAGE.md](./AI_USAGE.md) for detailed documentation of AI tools usage throughout the development process.
