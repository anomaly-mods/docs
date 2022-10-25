# Build Docusaurus site
FROM node:18-slim as build

WORKDIR /usr/src/app

EXPOSE 3000

RUN apt-get update -y
RUN apt-get install -y openssl

ARG NPM_TOKEN
COPY . .

RUN npm ci
RUN npm run build

# OAuth2 Proxy
FROM quay.io/oauth2-proxy/oauth2-proxy

COPY --from=build /usr/src/app/build/ /var/www/
COPY --from=build /usr/src/app/deploy/proxy/staging/proxy.cfg /etc/proxy.cfg

CMD [ "--config=/etc/proxy.cfg" ]