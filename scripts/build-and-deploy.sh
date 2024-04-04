#!/bin/bash

delete_containers_exposing_port() {
    local port=$1
    echo "Checking for containers exposing port $port..."
    local containers=$(docker ps --filter "publish=$port" -q)
    if [ ! -z "$containers" ]; then
        echo "Deleting containers exposing port $port..."
        docker rm -f $containers
    else
        echo "No containers exposing port $port found."
    fi
}

if [ "$1" = "prod" ]; then
    echo "Setting up MongoDB for production..."

    delete_containers_exposing_port 27017

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

    delete_containers_exposing_port 27017

    docker run -p 27017:27017 --rm -d --name my-mongo-dev -v my-mongo-data-dev:/data/db mongo:latest mongod

    docker compose -f docker-compose-build.yml build app
fi
