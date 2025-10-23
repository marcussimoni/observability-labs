#!/bin/bash

param=$1

if [ "$param" = "build" ]; then
    sh build.sh
fi

docker-compose -f docker-compose.yaml down

docker-compose -f docker-compose.yaml up