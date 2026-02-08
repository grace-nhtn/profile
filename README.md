# Profile V2 - Personal Portfolio

A modern, responsive personal profile page built with ReactJS, TypeScript, Ant Design, and SCSS. Features bilingual support (English/Vietnamese) and a professional CV display.

## Features

- 🌐 **Bilingual Support**: Switch between English and Vietnamese
- 📱 **Responsive Design**: 2-column layout on desktop, 1-column on mobile
- 🎨 **Modern UI**: Built with Ant Design components and custom SCSS
- ⚡ **Fast**: Powered by Vite for optimal performance
- 🔧 **TypeScript**: Full type safety throughout the application

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Ant Design 5** - UI component library
- **SCSS** - Styling with variables and mixins

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ProfileHeader/
│   ├── PersonalInfo/
│   ├── Education/
│   ├── Skills/
│   ├── WorkExperience/
│   └── Projects/
├── context/             # React contexts
│   └── LanguageContext.tsx
├── hooks/               # Custom hooks
│   └── useLanguage.ts
├── model/               # TypeScript interfaces
│   ├── cv.ts
│   └── language.ts
├── constants/           # Constants and data
│   ├── cvData.ts
│   ├── languages.ts
│   └── translations.ts
├── styles/              # SCSS files
│   ├── variables.scss
│   ├── mixins.scss
│   └── main.scss
├── utils/               # Utility functions
│   └── formatters.ts
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Updating CV Data

Edit the CV data in `src/constants/cvData.ts`:
- `cvDataEn` - English version
- `cvDataVn` - Vietnamese version

### Styling

Customize colors, typography, and spacing in:
- `src/styles/variables.scss` - SCSS variables
- `src/styles/mixins.scss` - Reusable mixins
- `src/styles/main.scss` - Main stylesheet

### Translations

Add or modify translations in `src/constants/translations.ts`

## CI/CD Pipeline

This project includes GitHub Actions workflows for continuous integration and deployment.

### Workflows

1. **CI Workflow** (`.github/workflows/ci.yml`)
   - Runs on push and pull requests
   - Type checks the codebase
   - Builds the project
   - Uploads build artifacts

2. **Deploy Workflow** (`.github/workflows/deploy.yml`)
   - Runs on push to `main` or `master` branch
   - Builds the project
   - Deploys to GitHub Pages

### Setting up GitHub Pages

1. Go to your repository Settings
2. Navigate to Pages section
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on push to main branch

### Base Path Configuration

The `vite.config.ts` is configured to use `/ProfileV2/` as base path when building in GitHub Actions. If your repository name is different, update the base path in `vite.config.ts`:

```typescript
base: process.env.GITHUB_ACTIONS ? '/your-repo-name/' : '/',
```

## License

MIT
