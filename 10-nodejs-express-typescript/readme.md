## How to start

```
npm run start

```

## About 

* SourceCode is inside ./server. Everything inside server is TypeScript

* 'tsc + tsconfig.jons' produce ./dist folder. Everything inside ./dist is JavaScript 


## How to create a docker image from a dockerfile

```
docker build --tag jalalhejazi/nodejs2021 .

```


## How to run a docker image as "service|container"

```
docker run -d -p 8000:1234 jalalhejazi/nodejs2021
docker run -d -p 8001:1234 jalalhejazi/nodejs2021
docker run -d -p 8002:1234 jalalhejazi/nodejs2021

```

now browse to 

* http://localhost:8000/
* http://localhost:8001/
* http://localhost:8002/


## How to publish image to remote git-repo

```

docker login

docker build --tag jalalhejazi/nodejs2021 .

docker push jalalhejazi/nodejs2021

```

