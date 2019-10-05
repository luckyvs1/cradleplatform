echo "Building database image..."
docker build -t marsdb -f Dockerfile.marsdb .

echo "Starting database and removing old database container."
docker rm -f marssql
docker run -d -p 3306:3306 --name marssql -e MYSQL_ROOT_PASSWORD=pass marsdb

echo "Building backend server image..."
docker build -t marsbackend -f Dockerfile.marsbackend .

echo "Starting backend server and removing previous container."
docker rm -f marsserver
docker run --rm -d -p 8080:8080 --name marsserver --link marssql:db_host marsbackend
