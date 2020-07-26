FROM node:10.19.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run compile

CMD [ "node", "dist/index.js" ]

EXPOSE 3000