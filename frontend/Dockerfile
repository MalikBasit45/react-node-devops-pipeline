# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# Expose frontend port
EXPOSE 5173

# Start dev server
CMD ["npm", "run", "dev", "--", "--host"]
