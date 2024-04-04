#!/bin/bash

if [ "$1" = "prod" ]; then
    echo "Setting up MongoDB for production..."

    docker rm -f my-mongo-prod
    docker rm -f my-mongo-dev

    docker run -p 27017:27017 -d --name my-mongo-prod -v my-mongo-data-prod:/data/db mongo:latest mongod

    REGISTRY_URL="registry.foothilltech.net/fts-tinacms"
    REGISTRY_REPOSITORY="tinacms"
    DATE=$(date +%F)

    docker compose build app
    docker tag fts-tinacms:latest ${REGISTRY_URL}/${REGISTRY_REPOSITORY}:${DATE}

    echo "Pushing image to Harbor..."
    docker push ${REGISTRY_URL}/${REGISTRY_REPOSITORY}:${DATE}
else
    echo "Setting up MongoDB for development..."

    docker rm -f my-mongo-prod
    docker rm -f my-mongo-dev

    docker run -p 27017:27017 --rm -d --name my-mongo-dev -v my-mongo-data-dev:/data/db mongo:latest mongod

    docker compose -f docker-compose-build.yml build app
fi
