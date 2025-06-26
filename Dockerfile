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

# Affiche le contenu du dossier dist pour le debug (après le build)
RUN ls -l /app/dist 

# Étape 2 : Serveur nginx pour la production
FROM nginx:alpine

# Supprime la config par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie la config personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie le build dans le dossier nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Affiche le contenu copié (debug)
RUN ls -l /usr/share/nginx/html

# Expose le port 80
EXPOSE 80

# Lance nginx en mode premier plan
CMD ["nginx", "-g", "daemon off;"]

