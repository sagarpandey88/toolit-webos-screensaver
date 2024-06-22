# Use a lightweight Node.js image with Node.js 20 pre-installed
FROM node:20-alpine AS builder

# Set working directory (optional, adjust if needed)
WORKDIR /app

# Copy package.json files for both ui and api directories
COPY /ui/package.json ./ui/package.json
COPY /api/package.json ./api/package.json

# Install dependencies for building the image (vite, etc.)
RUN npm install -g vite

# Build the image (optional)

# Use the builder stage to copy the application code
FROM builder AS app

# Copy both ui and api directories
COPY ui/ .ui
COPY api/ .api

# Install dependencies in each directory (separate commands)
WORKDIR /app/ui
RUN npm install

WORKDIR /app/api
RUN npm install

# Expose port for Express.js server (adjust port if needed)
EXPOSE 3000

# Set working directory for development (adjust if needed)
WORKDIR /app/ui  # Assuming your entry point is in the ui directory

# Configure Vite for development server with host access
CMD ["vite", "--host", "--server"]

