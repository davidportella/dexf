FROM node:4

RUN mkdir /src

RUN npm install express-generator -g
RUN npm install nodemon -g

WORKDIR /src
ADD app/package.json /src/package.json
ADD app/nodemon.json /src/nodemon.json
RUN npm install

EXPOSE 3000
CMD npm start
