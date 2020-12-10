# qkh_nodejs

This is an node.js implementation of a backand service

Written using `express` framework.

## Config
In the `db.sql` file are the required sql to make tables needed for the service

In `app/confing/db.config.js` is the configuration info for the DB.
```json
{
  HOST: "localhost",
  USER: "****",
  PASSWORD: "****",
  DB: "****",
  PORT: 3306
}
```

`app/confing/server.config.js` 
```json
{
  PORT: 8000,
  DEBUG: true,
}

```


## Install

Install the needed packages:

```
npm install
```

## Start
Start the server:
```
node server.js
```
## Test
Start tests:
```
npm test
```