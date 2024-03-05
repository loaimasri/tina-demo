#!/bin/bash

docker compose up -d mongo --build

docker compose up -d app --build