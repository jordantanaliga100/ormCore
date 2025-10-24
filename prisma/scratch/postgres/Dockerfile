FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install pnpm -g 

RUN pnpm install --frozen-lockfile

COPY . .

CMD ["pnpm", "run", "dev"]
