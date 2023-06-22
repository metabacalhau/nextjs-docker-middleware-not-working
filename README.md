## The problem
Middleware doesn't work when the project runs in Docker however it works correctly outside the Docker either in dev or in prod builds.

When the web app runs in a browser it is expected to be navigated to http://localhost/en and to see `Current locale: en` which means the middleware works correctly, but when the web app's URL is http://localhost/ and `Current locale: default` appears that means that the middleware doesn't work.

## To run locally
```
# dev
yarn && yarn dev

# prod
yarn && yarn build && yarn start
```

## To run in docker
```
docker build -t nextjs-docker-middleware-not-working .
docker run -t -i -p 3333:3333 nextjs-docker-middleware-not-working
```
