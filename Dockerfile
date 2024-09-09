# Use an official Node.js base image (choose the version you need)
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for the server (Express.js)
COPY server/package*.json ./
RUN npm install

# Copy the rest of the server code
COPY server ./

# Expose the server port (adjust as needed)
EXPOSE 3000

CMD [ "node", "dist/app.js" ]