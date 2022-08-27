FROM node:latest
WORKDIR /app
COPY ./package.json .
RUN yarn install --force
COPY . .
CMD yarn dev
