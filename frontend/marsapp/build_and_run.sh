echo "Building frontend application..."
docker run -it --rm -p 3000:3000 -w /app -v `pwd`/package.json:/app/package.json -v `pwd`/public:/app/public -v `pwd`/src:/app/src -v `pwd`/yarn.lock:/app/yarn.lock -v `pwd`/build:/app/build node:12.10-slim bash -c "yarn && yarn build"

echo "Building frontend application image..."
docker build -t marsfrontend -f Dockerfile.marsfrontend .

echo "Removing and running frontend container."
docker rm -f marssite
docker run -d --name marssite -p 8040:5000 marsfrontend
