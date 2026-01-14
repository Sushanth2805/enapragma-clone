# Ena Pragma - AI Readiness Diagnostic

A modern, production-ready web application for evaluating enterprise AI readiness. Built with React, TypeScript, and Tailwind CSS.

## Features

- **AI Readiness Diagnostic**: Comprehensive assessment across 7 operational pillars
- **Interactive UI**: Smooth animations and intuitive design
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Performance Optimized**: Vite-powered fast builds and development
- **Production Ready**: Configured for Vercel deployment

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 6
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd enapragma-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Click "Deploy"

The `vercel.json` file contains all necessary deployment configurations.

## Project Structure

```
enapragma-clone/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Audience.tsx
│   ├── Comparison.tsx
│   ├── Process.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── HeroCards.tsx
│   └── ui/             # Reusable UI components
│       └── Button.tsx
├── App.tsx             # Root component
├── index.tsx           # Entry point
├── index.css           # Global styles
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## Environment Variables

No sensitive environment variables are required for deployment. The app is fully static and can be deployed as-is.

For local development, create a `.env.local` file if needed (use `.env.example` as a template).

## Performance

- ✅ Optimized bundle size with code splitting
- ✅ Fast page loads with Vite
- ✅ Responsive design for all screen sizes
- ✅ Smooth animations and transitions
- ✅ Modern CSS features with Tailwind CSS

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

All rights reserved © 2024 Ena Pragma

## Support

For issues or questions, please open an issue in the repository.

