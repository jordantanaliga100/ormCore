FROM node:20 AS base
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install pnpm -g 


FROM base AS dev
WORKDIR /app
COPY . .
RUN pnpm install
EXPOSE 5000
CMD ["pnpm", "run", "dev"]



FROM base AS prod
WORKDIR /app
COPY . .
RUN pnpm install --prod
EXPOSE 5000
CMD ["pnpm", "run", "start"]


