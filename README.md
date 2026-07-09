# Frontend AI Engineering Capstone

## Project Name
AI Productivity Dashboard

## Project Overview
This repository contains the capstone application for the Frontend AI Engineering track. The project is built using Next.js (App Router) and Tailwind CSS, focusing on clean architecture, responsive design, and AI-driven productivity features.

## Tech Stack
- Next.js (App Router)
- React
- JavaScript
- Tailwind CSS
- ESLint

## Routes
The application is structured with the following core routes:
- `/` - Landing Page
- `/dashboard` - Dashboard overview
- `/tasks` - Task management
- `/insights` - AI-generated insights
- `/settings` - Application settings
- `/profile` - User profile
- `/health` - System health check
- `/api/health` - System health API endpoint

## Setup and Installation
1. Clone the repository to your local machine.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` to set up your environment variables (do not commit this file).

## Available Scripts
- `npm run dev` - Starts the Next.js local development server.
- `npm run build` - Creates an optimized production build.
- `npm start` - Starts a Node.js server to serve the production build.
- `npm run lint` - Runs ESLint to identify code quality issues.

## Environment Variables
The project uses the following public environment variables (defined in `.env.example`):
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_ENV`
Never commit real secrets or private keys to version control.

## Deployment
This project is configured for seamless deployment to Vercel. Pushing to the `main` or `master` branch will trigger a production deployment, while pushing to other branches will generate preview deployments.
