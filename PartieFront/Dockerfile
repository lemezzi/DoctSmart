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

# Construisez l'application React pour la production
RUN npm run build

# Installez un serveur pour servir les fichiers statiques (ex: serve)
RUN npm install -g serve

# Exposez le port que le serveur utilise
EXPOSE 3000

# Commande pour démarrer le serveur de fichiers statiques
CMD ["serve", "-s", "build"]
