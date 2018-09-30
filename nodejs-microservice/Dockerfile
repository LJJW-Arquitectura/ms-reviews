# Use Node v8 as the base image.
FROM node:8

# create and set app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Run app
CMD ["npm", "start"]

# COMANDO DOCKER RUN
#docker run  -d --publish 4000:4000 -e MYSQL_USER='root' -e MYSQL_PASSWORD='password' -e MYSQL_DATABASE='test' -e MYSQL_HOST='172.17.0.4' --link test-mysql-microservice:db --name=test-nodejs-microservice test-nodejs
