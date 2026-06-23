FROM node:22-slim

# better-sqlite3 needs a toolchain to build its native binding.
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

ENV UNDERPOD_PORT=4749
EXPOSE 4749
CMD ["npm", "start"]
