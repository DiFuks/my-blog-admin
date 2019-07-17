nodejsContainerName = admin-nodejs
nginxContainerName = admin-nginx

prod-yarn-install:
	docker-compose run ${nodejsContainerName} yarn install
prod-build:
	docker-compose run ${nodejsContainerName} yarn run prod
server:
	docker-compose up -d ${nginxContainerName}
