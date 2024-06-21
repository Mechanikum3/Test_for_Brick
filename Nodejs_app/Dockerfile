FROM node:14-alpine

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --production

RUN npm install uuid

COPY . /app

ENV AUTHOR="Ivan Makeenok"

ENV PORT=8000

CMD ["node", "index.js"]
