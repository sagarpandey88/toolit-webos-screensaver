# Use a lightweight Node.js image with Node.js 20 pre-installed
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies for building the image (vite, etc.)
RUN npm install -g vite

# Build the image (optional)

# Use the builder stage to copy the application code
FROM builder AS app

# Copy the rest of your application code (adjust path if needed)
COPY . .

# Install dependencies for development (excluding build tools)
RUN npm install

# Expose port for Express.js server (adjust port if needed)
EXPOSE 3000

# Set working directory for development
WORKDIR /app

# Configure Vite for development server with host access
CMD ["vite", "--host", "--server"]