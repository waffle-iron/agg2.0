
FROM node:latest
LABEL Name=reactapp Version=0.1.0 
COPY package.json /tmp/package.json
RUN cd /tmp && npm install --dev
RUN mkdir -p /usr/src/app && mv /tmp/node_modules /usr/src
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm run build
VOLUME ./isomorphic/build
EXPOSE 2000
CMD npm start
