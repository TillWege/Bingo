FROM tarampampam/node:latest

RUN git clone https://github.com/TillWege/Bingo.git

WORKDIR /Bingo

ADD .env.local /Bingo/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
