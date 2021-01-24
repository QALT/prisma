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

## Prisma Client Generation

```console
$ make generate
```

## Prisma Deploy

```console
$ make deploy
```

## Start

```console
$ make start
$ make run
```

## Fixtures

```console
$ make stop
$ sudo rm -rf postgres
$ make start
$ make deploy
$ make run
$ make fixtures
```
