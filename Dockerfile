# Build stage
FROM node:20-alpine as builder

# Declare build argument for GitHub Token
ARG GITHUB_TOKEN

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json .npmrc ./

# Install dependencies with the token exposed to the shell
# We use a secret mount or just env var substitution depending on how secure we want to be.
# For simplicity with .npmrc interpolation, simply setting the ENV var works.
ENV GITHUB_TOKEN=$GITHUB_TOKEN
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config or use default
# For SPA, we usually need a simple config to redirect 404s to index.html using try_files
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
