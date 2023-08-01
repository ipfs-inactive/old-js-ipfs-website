FROM node:18
WORKDIR /usr/app
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm i --legacy-peer-deps
