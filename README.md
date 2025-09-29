# Shifa Mehreen - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Deploying to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages:

### Prerequisites

- Git installed on your machine
- A GitHub account
- Node.js and npm installed

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `shifa-mehreen-portfolio`)
4. Make sure it's set to **Public**
5. Don't initialize with README, .gitignore, or license (since you already have a project)
6. Click "Create repository"

### Step 2: Update Configuration

The project is already configured for GitHub Pages deployment. If you need to change the repository name, update the following file:

**`next.config.ts`**
```typescript
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

Replace `/your-repo-name` with your actual repository name.

Also update the base URL in **`src/lib/data.ts`** if needed:
```typescript
// Update social links and any other URLs
```

### Step 3: Initialize Git and Push to GitHub

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Set Up GitHub Actions for Deployment

1. In your GitHub repository, go to **Settings** → **Pages**
2. Under "Build and deployment", select:
   - **Source**: GitHub Actions

3. Create a workflow file by creating `.github/workflows/deploy.yml` in your project:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 5: Deploy

1. Add the workflow file:
```bash
mkdir -p .github/workflows
# Create the deploy.yml file with the content above
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

2. Go to your repository on GitHub
3. Click on the "Actions" tab
4. You should see the workflow running
5. Once complete, your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 🔄 Updating Your Portfolio

Whenever you make changes to your portfolio:

```bash
# Make your changes to the code

# Add and commit changes
git add .
git commit -m "Description of your changes"

# Push to GitHub
git push
```

The GitHub Action will automatically rebuild and redeploy your site.

## 🛠️ Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📝 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint to check code quality

## 🎨 Customization

### Update Personal Information

Edit the following files to customize your portfolio:

- **`src/lib/data.ts`** - Update your experiences, projects, awards, skills, and social links
- **`src/app/layout.tsx`** - Update metadata (title, description, OpenGraph tags)
- **`src/app/page.tsx`** - Update the home page content

### Styling

The project uses Tailwind CSS. You can customize:

- **`tailwind.config.ts`** - Tailwind configuration
- **`src/app/globals.css`** - Global styles and CSS variables

## 📦 Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **shadcn/ui** - UI components

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── experience/         # Experience timeline page
│   ├── projects/           # Projects showcase with filtering
│   ├── awards/             # Awards and recognition
│   ├── decode/             # Decode startup page
│   ├── contact/            # Contact information
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── robots.ts           # SEO robots.txt
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── navbar.tsx          # Navigation component
│   ├── footer.tsx          # Footer component
│   ├── section.tsx         # Animated section wrapper
│   ├── timeline.tsx        # Experience timeline
│   ├── project-card.tsx    # Project showcase card
│   └── link-button.tsx     # Link button component
├── lib/                    # Utilities and data
│   ├── utils.ts            # Utility functions
│   └── data.ts             # Static data
└── types/                  # TypeScript type definitions
    └── index.ts
```

## 🐛 Troubleshooting

### Build Fails

If the build fails, check:
1. All required environment variables are set
2. `next.config.ts` has the correct `basePath` and `assetPrefix`
3. Run `npm run build` locally to see detailed error messages

### Site Not Loading Properly

If your site loads but assets are missing:
1. Verify the `basePath` in `next.config.ts` matches your repository name
2. Check that the repository is public
3. Wait a few minutes for GitHub Pages to propagate changes

### Dark Mode Not Working

The site is configured to always use dark mode. If it's not working:
1. Clear your browser cache
2. Check that `ThemeToggle` component is imported in `layout.tsx`
3. Verify the `dark` class is being added to the HTML element

### Routing Issues

If internal links don't work:
1. Make sure you're using Next.js `Link` components or proper anchor tags
2. Verify all page paths are correct
3. Check that pages are being exported in the build

## 🚀 Features

- **Modern Design**: Clean, responsive layout with smooth animations
- **Dark Mode**: Always-on dark mode for better readability
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete SEO setup with robots.txt and meta tags
- **GitHub Pages Ready**: Configured for automatic deployment
- **Performance**: Optimized builds with Next.js static export

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

- **Email**: shifamehreen.here@gmail.com
- **LinkedIn**: [Shifa Mehreen](https://linkedin.com/in/shifa-mehreen-8178111b8/)
- **GitHub**: [shifamehreen-005](https://github.com/shifamehreen-005)

---

Built with ❤️ by Shifa Mehreen