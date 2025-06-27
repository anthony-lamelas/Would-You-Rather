# build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build

# production stage
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default nginx files
RUN rm -rf ./*

# Copy built app from builder stage
COPY --from=builder /app/dist .

EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]