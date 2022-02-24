<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript.

Api for the time's up application.

## Installation

```bash
$ npm install
```

create the `.env` file and add the following lines:
```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DB_NAME"
```

## Build database
```bash
npx prisma generate
npx prisma migrate dev
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

