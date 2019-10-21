echo "Building backend server image..."
docker build -t marsbackend -f Dockerfile.marsbackend .

echo "Starting backend server and removing previous container."
docker rm -f marsserver
docker run --rm -d -p 8080:8080 --name marsserver --link marssql:db_host marsbackend
