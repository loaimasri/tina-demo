#!/bin/bash
docker run -p 27017:27017 --rm -d --name my-mongo mongo:latest mongod

docker compose up -d --build
