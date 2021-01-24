# prisma

## Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU/Make](https://www.gnu.org/software/make/)

## Repository Installation

```console
$ git clone git@github.com:QALT/prisma.git ~/github.com/QALT/prisma
$ cd ~/github.com/QALT/prisma
```

## Environment file

```console
$ cp .env.example .env
```

You wan to look in the .env of your api-platform repository to find the JWT_PASSPHRASE

## Dependencies Installation

```console
$ npm install
```

## Start

```console
$ make start
$ npm start
```

## TODO

### Deploy the Prisma DB

```
$ npx prisma1 deploy
```
