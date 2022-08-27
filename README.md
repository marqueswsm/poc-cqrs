# Template NodeJs

It is a really simple api to be used on proof-of-concepts.

### Database

If you have docker installed, execute:
```bash
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_ROOT_HOST=% -d mysql/mysql-server:5.7
```

Now, we need to create a database:
```bash
docker exect -it mysql /bin/bash
```
> Access the container

```bash
mysql -u root -p 
```
> Connect to the mysql server

```bash
create database seednode;
```
> Create database

Wow! Now we have a database. Then we can run our migrations:
```
npm run migrate:up
```