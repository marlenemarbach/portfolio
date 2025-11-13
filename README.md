# Portfolio Website

Personal portfolio website for Marlene Marbach - Frontend Developer based in Germany.
Live version: [mcodes.it.com](https://mcodes.it.com)

## Tech Stack

- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Bun](https://bun.sh/) - JavaScript runtime and package manager

## Setup

### Prerequisites

- [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime

### Installation

```bash
# Install dependencies
bun install
```

## Development

```bash
# Start development server
bun run dev
```

## Build

```bash
# Build for production
bun run build
```

## Preview

```bash
# Preview production build locally
bun run preview
```

## Project Structure

```
.
├── assets/          # Images and media files
├── projects/        # Project detail pages
├── public/          # Static assets
├── src/
│   ├── style.css   # Main stylesheet
│   └── year.js     # Dynamic year script
├── index.html      # Main entry point
└── vite.config.js  # Vite configuration
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. The workflow is triggered on push to the main branch.

## License

© Marlene Marbach
