# CradlePlatform

## Running with Docker

### --- Frontend React App
- First, cd into <project_root>/frontend/marsapp
1. Run ```docker run -it --rm -p 3000:3000 -w /app -v `pwd`/package.json:/app/package.json -v `pwd`/public:/app/public -v `pwd`/src:/app/src -v `pwd`/yarn.lock:/app/yarn.lock node:12.10-slim bash```
    - **(This command will be slightly different for windows machines)**
2. Run `yarn` and wait for install to complete
3. Run `yarn start` to start react server
    - **NOTE: You can now make changes to react app without restarting the server**
4. Visit `http://localhost:3000` to view the app
