# Use an official Node.js base image (choose the version you need)
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for the client (React app)
COPY client/package*.json ./
RUN npm install

# Copy the rest of the client code
COPY client ./

# Build the client (if needed)
RUN npm run build

# Switch to the server directory
WORKDIR /app/server

# Copy package.json and package-lock.json for the server (Express.js)
COPY server/package*.json ./
RUN npm install

# Copy the rest of the server code
COPY server ./

# Expose the server port (adjust as needed)
EXPOSE 3000

EXPOSE 5174