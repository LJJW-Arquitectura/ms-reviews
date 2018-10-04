# Microservice for Reviews and Suggestions

Juan David Garcia Niño

This repository contains a nodejs project designed to run as a dockerized microservice that presents a REST API.

To run this project, deploy it on a suitable Docker Container

`docker-compose build`

`docker-compose up`

This project uses express framework in nodejs.

The project has 2 folders: 

`mysql-microservice` where there is the sql scripts that creates the tables inside the database, and after adds a few registers.

`nodejs-microservice` where there are 2 files,`index.js` where the connection with the database and the server is created, and  `routes.js` where all the petitions are created, it is the controller.
