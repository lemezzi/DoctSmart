# Utilisez l'image officielle de Node.js
FROM node:14

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port que l'application utilise
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["npm", "start"]
