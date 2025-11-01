# Deployment Guide

This project is configured for seamless deployment to GitHub Pages.

## Automatic Deployment (Recommended)

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**:
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
     - Build the project
     - Deploy to GitHub Pages

3. **Verify the base path** in `vite.config.ts`:
   - The `base` option should match your repository name
   - Currently set to `/me/` - update if your repo has a different name
   - Example: if repo is `username.github.io`, set `base: '/'`
   - Example: if repo is `portfolio`, set `base: '/portfolio/'`

## Manual Deployment

If you prefer manual deployment:

```bash
npm run build
git add docs/
git commit -m "Deploy to GitHub Pages"
git push
```

Then in GitHub repository settings → Pages → Source, select the `docs` folder.

## Troubleshooting

### Media not showing
- Ensure all images/videos are in the `public/images/` folder
- The base path in `vite.config.ts` must match your repository name
- Clear browser cache after deployment

### 404 errors
- Verify the base path in `vite.config.ts` matches your repository name
- Ensure HashRouter is being used (already configured in `App.tsx`)

