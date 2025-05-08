.PHONY: build up status down

build:
	docker-compose build

up: build
	docker-compose up -d

down:
	docker-compose down -v
