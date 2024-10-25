# Task Board

## Database

```
initdb -D ~/.pgdata/var/lib/postgresql/data

docker compose up

psql -h localhost -p 5431 -U postgres

postgres=# create database task_board;

psql -h localhost -p 5431 -U postgres -d task_board
```

## Server

```
cd server
npm start
```

## Client

```
cd client
npm run start
```
