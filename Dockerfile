FROM node:latest as angular
ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/curso-angular /usr/share/nginx/html
COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf

# Projeto rodando na porta 80, criar a imagem e executar a imagem
# docker build -t curdo-angular .
# docker run -p 8081:80 curso-angular
