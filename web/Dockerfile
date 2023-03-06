# Define a imagem base
FROM node:14-alpine

# Define o diretório de trabalho do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Constrói o projeto React
RUN npm run build

# Expõe a porta usada pelo React
EXPOSE 3000

# Define o comando para iniciar o servidor web
CMD ["npm", "run", "start"]
