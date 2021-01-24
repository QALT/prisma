.PHONY: start stop restart install deploy run fixtures generate lint fix

DOCKER_COMPOSE_RUN_OPTIONS=--rm

ifeq (${CI},true)
	DOCKER_COMPOSE_RUN_OPTIONS=--rm --service-ports --user root -T
endif

start:
	docker-compose up --detach

stop:
	docker-compose down --remove-orphans --volumes --timeout 0

restart: stop start

install:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm install

deploy:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npx prisma1 deploy

run:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) --service-ports npm run start

fixtures:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm run fixtures

generate:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm run generate

lint:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm run lint

fix:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm run fix
