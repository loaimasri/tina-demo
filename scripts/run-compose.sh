#!/bin/bash

if [ "$1" = "prod" ]; then
    export APP_IMAGE="your.harbor.registry.url/fts-tinacms:latest"
else
    export APP_IMAGE="fts-tinacms"
fi

docker compose -f docker-compose.yml up -d