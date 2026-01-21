FROM node:25.4.0-alpine3.23
RUN npm i -g pnpm
WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN pnpm i
COPY . .
EXPOSE 3000
CMD [ "pnpm" , "run", "dev" ]