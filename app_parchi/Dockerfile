FROM node:14-alpine as builder

ENV REACT_APP_GEOSERVER_URL="http://geoserver.devopslabs.xyz"

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
RUN npm install -g serve

CMD [ "serve", "-s", "build" ]
