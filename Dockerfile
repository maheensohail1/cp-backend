# Use the official Node.js image as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Run database migrations
#RUN npx prisma migrate deploy
# RUN npx prisma migrate deploy

# Expose the application port
EXPOSE 5000

# Set environment variables
ENV NODE_ENV production

# Start the application
CMD ["npm", "run", "start"]
