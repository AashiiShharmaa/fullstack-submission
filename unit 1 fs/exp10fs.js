FROM node:18-alpine AS build
# Set working directory
WORKDIR /app
# Install dependencies separately to leverage caching
COPY package*.json ./
RUN npm install --legacy-peer-deps
# Copy rest of the application
COPY . .
# Build React app
RUN npm run build
# ---------- Stage 2: Production ----------
FROM nginx:stable-alpine
# Copy built React app to Nginx html folder
COPY --from=build /app/build /usr/share/nginx/html
# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
server {
 listen 80;
 location / {
 root /usr/share/nginx/html;
 index index.html index.htm;
 try_files $uri /index.html;
 }
 error_page 500 502 503 504 /index.html;
}
# Build image
docker build -t react-app .
# Run container
docker run -p 3000:80 react-app