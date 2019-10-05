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

## Project's Directory Stucture
   
    ├── docs                        # Documentation files (alternatively `doc`)  
    |    ├──curl-commands.txt       
    |    └──request_test.py         
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
    |    └──README.md              
    |
    └── backend                     # Code containing backend server
         ├──gradle                  # Auto generated Gradle folder
         |     └──wrapper           # Gradle wrapper files (a executable jar and a properties file)
         └── src                    # All backend server code (in Java)
              ├──main                    
              |   ├──java                
              |   |   └──org.cradlePlatform
              |   |              ├──controller   # All controller classes
              |   |              └──model        # All model classes
              |   └──resources           # SQL/database files (schema,...)
              └──test                    # Contains all unit test files

## Running with Docker

### --- Database Server
- First, cd into `${root}/backend` of project directory
1. Run:
    - `docker build -t marsdb -f Dockerfile.marsdb .`
    - This will build a docker image called `marsdb` that will run our database
2. Run: 
    - `docker run -d -p 3306:3306 --name marssql -e MYSQL_ROOT_PASSWORD=pass marsdb`
    - This starts the mysql database server with the table schema already imported and dummy data if that is also included.
3. To `ssh` into database, run: 
    - `docker exec -it marssql /bin/bash`
4. Now you can run:
    - `mysql -u root -p` and 
    - type `'pass'` when prompted to create a *MySQL* shell.

### --- Backend Server (local development)
First, cd into `${root}/backend` of project directory
1. Run: 
    - `docker run -it --rm -v `pwd`:/app -w /app -p 8080:8080 --link marssql:db_host openjdk:12-jdk bash`
    - This will run a openjdk container linked to the database with the current folder attached as a volume for our local development
      - NOTE: Any changes made to files inside the containers will be replicated on the host machine as well.
      - NOTE: This also binds the host machines' port 8080 to docker containers' port 8080
2. Run:
    - `./gradlew build` to build your app
3. Run:
    - To run the spring boot application, run: `java -jar build/libs/app-0.0.1-SNAPSHOT.jar` 
    - You should see the spring boot application launching
    - Visit `http://localhost:8080` to view the app

##### --- NOTE
If running outside of Docker have this line uncommented: 
`spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/marsdb`

and comment out 
`spring.datasource.url=jdbc:mysql://db_host:3306/marsdb`.


If running within Docker have this line uncommented:
`spring.datasource.url=jdbc:mysql://db_host:3306/marsdb`

and comment out 
`spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/marsdb`.
