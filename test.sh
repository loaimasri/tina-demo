#!/bin/bash

# Start MongoDB container
docker run -d --name mongo_instance mongo:latest mongod --bind_ip_all --network host

docker compose up -d app --build

# Stop and remove the MongoDB container
docker stop mongo_instance
docker rm mongo_instance
