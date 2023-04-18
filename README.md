# Nearby (Bazel)
Coding practice using Bazel to create a simple REST API

https://github.com/kriscfoster/multi-language-bazel-monorepo

# TODOs
- [x] Create bazel setup with gazelle
- [x] Create functional test (maybe run a postman collection?)
- [ ] Integrate functional test with github actions
- [x] Set up a database to use (probably in a docker container, docker compose like)
- [ ] Add documentation of Goal for this repo
- [x] Migrate golang project and adapt it to new database

## Start project
### Database
This project uses a MySQL database in a docker container, in order to get it started run:
```shell
docker compose up -d
```
This will initialize a MySQL server in `localhost:3306` with the schema and table pre populated in database `nearby`

### Documentation
A swagger file can be generated using swag, based on the comments in the code of the golang/ version
```shell
swag init -g golang/cmd/nearby/main.go --ot yaml -o api/
```

## Docker images
### Golang
To create the image run:
```shell
bazel run  //golang/cmd/nearby:nearby_image -- --norun
```
This will create a new docker image with the name `bazel/golang/cmd/nearby:nearby_image`,
you can then run the image:
```shell
docker run -p 8080:8080 --rm bazel/golang/cmd/nearby:nearby_image
```


## Functional tests
The repo has a postman collection with contract validation test in `api/api.postman_collection.json`, this file was
created manually after importing the swagger file from `api/swagger.yaml`.

You can use `newman` to run tests against an API instance, make sure you override the env var `baseUrl` to point to your
API instance.
Example:
```shell
newman run --env-var baseUrl=localhost:8081 api/api.postman_collection.json
```

**IDEA: add github action to run this on PR, I can create a new docker container for each API, and integrate it into the
docker compose file, have both APIs running and then run newman. I can use the github action matrix to run 
tests for all APIs at the same time since all API endpoints only runs SELECT queries, it will not affect parallel executions**
