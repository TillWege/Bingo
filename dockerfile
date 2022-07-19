FROM tarampampam/node:latest

RUN git clone https://github.com/TillWege/Bingo.git

WORKDIR /bingo

ADD .env.local /bingo/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
