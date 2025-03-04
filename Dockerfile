FROM node:22.13.1-alpine3.21 AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files and build the project
COPY . .

# Set up build argument and environment variable
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# Build with the environment variable
RUN npm run build

# Intermediate stage for SVG optimization
FROM node:22.13.1-alpine3.21 AS optimizer
WORKDIR /app
COPY --from=builder /app/dist /app
# Install SVGO for SVG optimization
RUN npm install -g svgo
# Optimize all SVGs
RUN find . -name "*.svg" -exec svgo --multipass {} \;

# Serve with Nginx
FROM nginx:1.23
# Copy optimized files instead of original build
COPY --from=optimizer /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create cache directories and set permissions
RUN mkdir -p /var/cache/nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    mkdir -p /var/run && \
    chown -R nginx:nginx /var/run

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
