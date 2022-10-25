FROM node:18-slim as cache

WORKDIR /usr/src/app

EXPOSE 3000

RUN apt-get update -y
RUN apt-get install -y openssl

COPY . .

RUN npm i tasksfile github-graphql-api gray-matter
RUN npx task ensureDiscussions

# Build Docusaurus site
FROM node:18-slim as build

WORKDIR /usr/src/app

EXPOSE 3000

ENV PROD=true

RUN apt-get update -y
RUN apt-get install -y openssl

ARG NPM_TOKEN
COPY . .
COPY --from=cache /usr/src/app/src/components/Discussion/discussions.json ./src/components/Discussion/discussions.json

RUN npm ci
RUN npm run build

# OAuth2 Proxy
FROM quay.io/oauth2-proxy/oauth2-proxy

COPY --from=build /usr/src/app/build/ /var/www/
COPY --from=build /usr/src/app/deploy/proxy/production/proxy.cfg /etc/proxy.cfg

CMD [ "--config=/etc/proxy.cfg" ]