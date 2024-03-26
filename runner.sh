#!/bin/bash

docker run -d --name my-mongo mongo:latest mongod --bind_ip_all --network host
#docker compose up -d mongo --build

docker compose up -d app --build
