FROM node:14-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
RUN npm install -g http-server

CMD [ "http-server", "./build", "-p", "3000" ]

# FROM nginx
# EXPOSE 3000
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --from=builder /app/build /usr/share/nginx/html
