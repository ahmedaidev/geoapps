FROM node:14-alpine

ENV REACT_APP_GEOSERVER_URL="http://geoserver.devopslabs.xyz"
ENV REACT_APP_GEOSERVER_WORKSPACE="geoapp"

WORKDIR /app
COPY ./package.json ./
RUN npm install --production
COPY ./ ./
RUN npm run build
RUN npm install -g serve

CMD [ "serve", "-s", "build" ]