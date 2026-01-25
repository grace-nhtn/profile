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

### Prerequisites (GitHub Free Account)

**Important:** For GitHub Free accounts, your repository **must be public** to use GitHub Pages.

### Setup Instructions

1. **Ensure repository is public:**
   - Go to **Settings** → **General** → **Danger Zone**
   - If repository is private, change it to **Public**

2. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
   - If you see "Your site is ready to be published", click **Save**

3. **Verify workflow:**
   - Go to **Actions** tab
   - The workflow should run automatically on push to `main` branch
   - Wait for the workflow to complete (first run may take 2-3 minutes)

### Troubleshooting

**Error: "Get Pages site failed" or "HttpError: Not Found"**
- Make sure repository is **public** (required for GitHub Free)
- Verify **Settings** → **Pages** → **Source** is set to **GitHub Actions**
- Check that Pages is enabled (you should see a green checkmark in Settings → Pages)

**Workflow runs but site doesn't load:**
- Wait 1-2 minutes after workflow completes (DNS propagation)
- Check the workflow logs in **Actions** tab for any errors
- Verify the site URL: `https://yeolie.github.io/profile/`

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
