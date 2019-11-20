docker run -i --rm -p 3000:3000 -w /app -v `pwd`/package.json:/app/package.json -v `pwd`/public:/app/public -v `pwd`/src:/app/src -v `pwd`/yarn.lock:/app/yarn.lock node:12.10-slim bash

yarn

yarn start