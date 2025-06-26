# Étape 1 : Build de l'application
FROM node:22-slim AS build

WORKDIR /app

# Copier uniquement les fichiers nécessaires au build dans un premier temps
COPY package*.json ./
RUN npm ci

# Copier ensuite tout le reste (code source)
COPY . .

# Lancer le build Vite/React
RUN npm run build

# Étape 2 : Serveur nginx pour la production
FROM nginx:alpine

# Supprime la config par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie le build dans le dossier nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose le port 80
EXPOSE 80
