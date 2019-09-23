# CradlePlatform

## Running with Docker

### --- Database Server
- First, cd into `root` of project directory
1. Run `docker build -t marsdb -f Dockerfile.marsdb .`
    - This will build a docker image called `marsdb` that will run our database
2. Run `docker run -d -p 3306:3306 --name marssql -e MYSQL_ROOT_PASSWORD=pass marsdb`
    - This starts the mysql database server with the table schema already imported and dummy data if that is also included.
3. To `ssh` into database, run `docker exec -it marssql /bin/bash`
4. Now you can run `mysql -u root -p` and type `'pass'` when prompted to create a *MySQL* shell.

### --- Backend Server
- First, cd into `root` of project directory
1. Run `docker build -t marsbackend -f Dockerfile.marsbackend .`
    - This will build a docker image called `marsbackend` that we can run our app in.
2. Run `docker run -it --rm -p 8080:8080 marsbackend /bin/bash` to run the docker image
    - This  `ssh`s you into the docker container and into the directory with the project resources, it also binds your machines port `8080` to docker's port `8080` so you can access docker container port `8080` from your web browser
    - Run `java -jar build/libs/app-0.0.1-SNAPSHOT.jar` to run the spring boot application
    - You should see the spring boot application launching
    - Visit `http://localhost:8080` to view the app
