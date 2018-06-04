FROM node:6-alpine

EXPOSE 3000

RUN apk add --update tini
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install && npm cache clean

COPY . .

CMD ["tini","--","node", "server/server.js"]
