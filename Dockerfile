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

# Serve with Nginx
FROM nginx:1.23
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
