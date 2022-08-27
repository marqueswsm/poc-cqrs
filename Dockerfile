FROM node:16
RUN mkdir -p /user/src/app
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .
RUN npm install
EXPOSE 3000
CMD npm run migrate:up && npm start