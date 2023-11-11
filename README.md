# udemy-tastylog

## Quick start

```
$ git clone git@github.com:ryota-sato07/udemy-tastylog.git
$ cd udemy-tastylog
$ git clone --recurse-submodules git@github.com:ryota-sato07/udemy-tastylog-database.git lib/database/conf
```

## Database access

```
$ cd lib/database/conf
$ docker-compose up -d
$ mysql -uroot -p -h127.0.0.1 -P3306
```

## Localhost access

```
$ pwd
/node/udemy-tastylog

$ yarn build

$ ./dist/tastylog
```
