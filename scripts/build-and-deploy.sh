#!/bin/bash

if [ "$1" = "prod" ]; then
    echo "Setting up MongoDB for production..."
    docker run -p 27017:27017 -d --name my-mongo-prod -v my-mongo-data-prod:/data/db mongo:latest mongod

    REGISTRY_URL="your.harbor.registry.url/fts-tinacms"
    DATE=$(date +%F)
    docker compose build app
    docker tag fts-tinacms:latest ${REGISTRY_URL}:${DATE}

    echo "Logging in to Harbor..."
    docker login ${REGISTRY_URL}

    echo "Pushing image to Harbor..."
    docker push ${REGISTRY_URL}:${DATE}
else
    echo "Setting up MongoDB for development..."
    docker run -p 27017:27017 --rm -d --name my-mongo-dev -v my-mongo-data-dev:/data/db mongo:latest mongod

    docker compose -f ../docker-compose-build.yml build app
fi
