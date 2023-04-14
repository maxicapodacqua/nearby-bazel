# Nearby (Bazel)
Coding practice using Bazel to create a simple REST API

https://github.com/kriscfoster/multi-language-bazel-monorepo

# TODOs
- [x] Create bazel setup with gazelle
- [ ] Create functional test (maybe run a postman collection?)
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