#!/bin/bash


# Change directory to the API project
cd server

# Start the API process (assuming node index.js starts the API)
npm install && npm run start &

# Move back to the root directory (optional)
cd ..

# Change directory to the UI project
cd client

# Start the UI process (assuming npm run dev starts the UI)
npm install && npm run dev

