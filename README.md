# Personal Profile Website

Personal profile website built with React + TypeScript + Vite + Ant Design.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Ant Design** - UI component library
- **SCSS** - Styling

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages via GitHub Actions.

### Setup Instructions

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically build and deploy on every push to `main` branch

### Live Site

Once deployed, your site will be available at:
`https://yeolie.github.io/profile/`

## Project Structure

```
src/
├── components/     # React components
├── constants/      # Constants and data
├── model/          # TypeScript interfaces
├── styles/         # SCSS stylesheets
└── main.tsx        # Entry point
```

## License

Private project
