#!/bin/bash

# Change directory to the UI project
cd ui

# Start the UI process (assuming npm run dev starts the UI)
npm run dev &

# Move back to the root directory (optional)
cd ..

# Change directory to the API project
cd api

# Start the API process (assuming node index.js starts the API)
node index.js
