.PHONY: start stop restart install deploy run

start:
	docker-compose up --detach

stop:
	docker-compose down --remove-orphans --volumes --timeout 0

restart: stop start

install:
	docker-compose run --rm npm install

deploy:
	docker-compose run --rm npx prisma1 deploy

run:
	docker-compose run --rm --service-ports npm run start
