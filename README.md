# On Shore Frontend

A modern React application featuring smooth scroll navigation and video case studies. Built with Vite and deployed on Google Cloud Run.

## Features

- Responsive single-page design with smooth scroll navigation
- Dynamic video case studies loading
- Section-based navigation with URL updates
- Custom scroll management with Intersection Observer
- Mix-blend-mode header for better visibility across sections

## Tech Stack

- React 18
- Vite
- React Router DOM
- Axios for API calls
- Google Cloud Run for deployment
- Nginx for serving static files

## Prerequisites

- Node.js (v22.13.1 or higher)
- npm
- Docker (for deployment)
- Google Cloud CLI (for deployment)

## Local Development

1. Clone the repository:
```bash
git clone [your-repository-url]
cd onshore-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_URL=https://onshore-backend-1082669534812.europe-west1.run.app
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Building for Production

Build the application locally:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Docker Deployment

### Important Note About Environment Variables
When deploying with Vite, environment variables must be:
1. Prefixed with `VITE_` to be accessible in the application
2. Set both during build time (via --build-arg) AND runtime (via --set-env-vars)
3. Accessed in your code using `import.meta.env.VITE_API_URL`

### Deployment Steps

1. Build the Docker image (make sure to include the VITE_API_URL build arg):
```bash
docker build --platform linux/amd64 \
  --build-arg VITE_API_URL=https://onshore-backend-1082669534812.europe-west1.run.app \
  -t gcr.io/onshore-448814/onshore-frontend:latest .
```

2. Push to Google Container Registry:
```bash
docker push gcr.io/onshore-448814/onshore-frontend:latest
```

3. Deploy to Google Cloud Run (make sure to set the environment variable again):
```bash
gcloud run deploy onshore-frontend \
  --image gcr.io/onshore-448814/onshore-frontend:latest \
  --platform managed \
  --region europe-west1 \
  --set-env-vars VITE_API_URL=https://onshore-backend-1082669534812.europe-west1.run.app \
  --allow-unauthenticated
```

### Troubleshooting
If you encounter errors about "Unexpected token '<'" or missing environment variables:
- Ensure you've included the `--build-arg` in your docker build command
- Verify that the environment variable is set in Cloud Run using `--set-env-vars`
- Check that all environment variables are prefixed with `VITE_` when using Vite
- Confirm your Dockerfile correctly handles the build argument with:
  ```dockerfile
  ARG VITE_API_URL
  ENV VITE_API_URL=$VITE_API_URL
  ```

## Project Structure

```
src/
├── components/         # React components
│   ├── About/         # About section
│   ├── Cases/         # Case studies section
│   ├── Contact/       # Contact section
│   ├── Header/        # Navigation header
│   ├── Home/          # Home section
│   └── ScrollManager/ # Scroll behavior management
├── App.jsx            # Main application component
├── main.jsx          # Application entry point
├── main.css          # Global styles
└── normalize.css      # CSS normalization
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build locally

## Styling

The application uses CSS modules with a section-based color scheme:
- Home: Green (#2b5547)
- Cases: Orange (#f06847)
- About: Yellow (#f6c746)
- Contact: Light Yellow (#fffbf0)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
