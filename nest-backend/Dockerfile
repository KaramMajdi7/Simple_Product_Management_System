# Use the official Node.js version 16 image as the base image
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the port the Nest.js app runs on which is 5000 in our case
EXPOSE 5000

# Start the Nest.js application using the command npm run start:dev to watch for changes in the source files
CMD ["npm", "run", "start:dev"]
