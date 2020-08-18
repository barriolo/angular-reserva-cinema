FROM node:12.7-alpine as angular
WORKDIR /app
COPY package.json ./
RUN npm install --silent
COPY . .

RUN npm run build

### STAGE 2: Run ###
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/angular-reserva-cinema /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf


