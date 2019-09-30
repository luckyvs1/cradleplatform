# CradlePlatform
## Project Intro
The Cradle Software Project is aimed to aid medical personnel in developing countries better assist their patients. It will attempt to 
eliminate current problems that these workers are currently facing in order to provide better assistance. Some of the most important 
functions that this project will allow its users to obtain is the ability to manage their patients through a web interface. This will 
eliminate problems such as losing documentation, losing referrals and not being able to keep patient information private amongst different 
health workers. Additionally, it will allow patients to receive the proper care in a timely manner. 

Project Specifics
This project uses a combination of Spring Boot, MySQL, and React. It will be able to communicate with current Cradle Capture App in order to 
sync information between the mobile and web application. 

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
    
## Project's Directory Stucture
   
    ├── docs                        # Documentation files (alternatively `doc`)  
    |    ├──curl-commands.txt       # Curl request for Android services
    |    ├──request_test.py         # Curl request test with mock data
    ├── frontend                    # All files related to client side (React) 
    |    ├──marsapp                 # All React files
    |    |     ├──public            # Auto generated icons and React logos (contains static files)
    |    |     ├──src               # Main front end files (contains all dynamic files)
    |    |     |   ├──actions       # All action creators
    |    |     |   ├──component     # All components
    |    |     |   |     ├──forms           # Define how data is passed into the pages in "pages"
    |    |     |   |     ├──messages        # Define how to render messages to client
    |    |     |   |     ├──navigation      # Define top nagivation bar
    |    |     |   |     ├──pages           # Define all pages for the app
    |    |     |   |     ├──routes          # Define different path for user (logged in) and guest 
    |    |     |   ├──reducers      # Define how an application's state change in response to an action
    |    |     |   ├──res           # Contains other resources (pictures,...)
    |    |     |   ├──utils         # Define what each user type can see
    |    ├──README.md               # Instructions to run the client (React)
    ├── gradle                      # Auto generated Gradle folder
    |    ├──wrapper                 # Gradle wrapper files (a executable jar and a properties file)
    ├── src                         # All backend server code (in Java)
    |    ├──main                    
    |    |   ├──java                
    |    |   |   ├──org.cradlePlatform
    |    |   |   |          ├──controller   # All controller classes
    |    |   |   |          ├──model        # All model classes
    |    |   ├──resources           # SQL/database files (schema,...)
    |    ├──test                    # Contains all unit test files

