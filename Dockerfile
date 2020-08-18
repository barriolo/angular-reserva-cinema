FROM node:12.7-alpine as angular
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --silent
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=angular app/dist/browser /usr/share/nginx/html
