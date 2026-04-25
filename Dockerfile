FROM node:20-alpine
WORKDIR /app

# Dependencies install
COPY package*.json ./
RUN npm install

# Copying the rest
COPY . .

# Port opening
EXPOSE 3000

# Running dev-mode for sync
CMD ["npm", "run", "dev"]