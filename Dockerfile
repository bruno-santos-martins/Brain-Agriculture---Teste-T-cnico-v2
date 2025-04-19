# Etapa de build
FROM node:20-bullseye AS build

# Instala dependências do sistema, incluindo libssl1.1
RUN apt-get update && \
    apt-get install -y curl openssl libssl1.1 && \
    apt-get clean

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Gera Prisma Client
RUN npx prisma generate

# Compila a aplicação NestJS
RUN npm run build

# Etapa de produção
FROM node:20-bullseye

RUN apt-get update && \
    apt-get install -y curl openssl libssl1.1 && \
    apt-get clean

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

#CMD ["node", "dist/main"]
CMD ["npm", "run", "start:dev"]