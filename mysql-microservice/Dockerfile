## Pull the mysql:5.7 image
FROM mysql:5.7


# database = test and password for root = password
#ENV MYSQL_DATABASE=test \
#    MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=review_suggestions \
    MYSQL_ROOT_PASSWORD=reviewPassword
# when container will be started, we'll have `test` database created with this schema
COPY ./scripts.sql /docker-entrypoint-initdb.d/

#sudo docker run -d --publish 6603:3306 --name=test-mysql-microservice test-mysql
