# Imagem base do Node.js
FROM node:14-alpine

# Define o diretório de trabalho do contêiner
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 19000

CMD ["npx", "expo", "start"]
