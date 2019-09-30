# CradlePlatform
## Project Intro
The Cradle Platform Project is a web interface that works with the existing Cradle Android App
to help monitor the health of pregnant women in developing countries.

This new web interface will simplify and streamline workers' process of taking patients' vitals,
referring them to health centres, and following up with them, as well as managing patients.

The Cradle Platform web application will eliminate problems such as incomplete documentation,
losing referral forms, and failure to deliver documents to their proper recipients,
making medical workers' jobs easier and ensuring patients receive care in an efficient manner.

Cradle Platform will allow data to be synchronized between the web interface and the Android app
so all users can work with up-to-date data, and allow workers to create reports based on their
performance and metrics.

## Project Specifics
This project uses a combination of Spring Boot, MySQL, and React.
It will be able to communicate with the current Cradle Capture App in order to sync information between the mobile and web application. 

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
    |    └──request_test.py         # Curl request test with mock data
    ├── frontend                    # All files related to client side (React) 
    |    ├──marsapp                 # All React files
    |    |     ├──public            # Auto generated icons and React logos (contains static files)
    |    |     └──src               # Main front end files (contains all dynamic files)
    |    |         ├──actions       # All action creators
    |    |         ├──component     # All components
    |    |         |     ├──forms           # Define how data is passed into the pages in "pages"
    |    |         |     ├──messages        # Define how to render messages to client
    |    |         |     ├──navigation      # Define top nagivation bar
    |    |         |     ├──pages           # Define all pages for the app
    |    |         |     └──routes          # Define different path for user (logged in) and guest 
    |    |         ├──reducers      # Define how an application's state change in response to an action
    |    |         ├──res           # Contains other resources (pictures,...)
    |    |         └──utils         # Define what each user type can see
    |    └──README.md               # Instructions to run the client (React)
    ├── gradle                      # Auto generated Gradle folder
    |    └──wrapper                 # Gradle wrapper files (a executable jar and a properties file)
    └── src                         # All backend server code (in Java)
         ├──main                    
         |   ├──java                
         |   |   └──org.cradlePlatform
         |   |              ├──controller   # All controller classes
         |   |              └──model        # All model classes
         |   └──resources           # SQL/database files (schema,...)
         └──test                    # Contains all unit test files

