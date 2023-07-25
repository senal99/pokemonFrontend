# Use the official Node.js 18 image with Alpine Linux as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container's working directory
COPY . .

# Build the application (assuming you have a build script defined in package.json)
RUN npm run build

# Expose the port on which your React app will be running (modify this if needed)
EXPOSE 8000

# Start the application using "npm run start" (modify if your script name is different)
CMD ["npm", "run", "dev"]
