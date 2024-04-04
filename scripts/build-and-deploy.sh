#!/bin/bash

if [ "$1" = "prod" ]; then
    echo "Setting up MongoDB for production..."
    docker run -p 27017:27017 -d --name my-mongo-prod -v my-mongo-data-prod:/data/db mongo:latest mongod

    REGISTRY_URL="registry.foothilltech.net/tinacms"
    DATE=$(date +%F)
    docker compose build app
    docker tag fts-tinacms:latest ${REGISTRY_URL}/fts-tinacms:${DATE}

    echo "Pushing image to Harbor..."
    docker push ${REGISTRY_URL}/fts-tinacms:${DATE}
else
    echo "Setting up MongoDB for development..."
    docker run -p 27017:27017 --rm -d --name my-mongo-dev -v my-mongo-data-dev:/data/db mongo:latest mongod

    docker compose -f docker-compose-build.yml build app
fi
