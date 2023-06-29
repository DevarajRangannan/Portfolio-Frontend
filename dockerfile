FROM node:18-alpine

ENV PORT=3000

WORKDIR /app

COPY . .

RUN npm install && npm install -g serve && npm run build

EXPOSE $PORT

ENTRYPOINT [ "serve", "build" ]