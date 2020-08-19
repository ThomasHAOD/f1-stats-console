FROM node:14.4.0 as build-deps
WORKDIR /var/app/f1-stats
COPY package.json package-lock.json ./
RUN npm install --production --silent --pure-lockfile
COPY src ./src
COPY public ./public
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=build-deps /var/app/f1-stats/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]