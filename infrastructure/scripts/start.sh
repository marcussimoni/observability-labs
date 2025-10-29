#!/bin/bash

param=$1

if [ "$param" = "build" ]; then
    sh build.sh
fi

sh stop.sh

network="infra_network"

echo "CREATING $network DOCKER NETWORK"
docker network create $network

dockerComposes=("docker-compose-opensearch" "docker-compose-dbs" "docker-compose-messages" "docker-compose-utilities" "docker-compose-observability" "docker-compose-apps")

for dockerCompose in "${dockerComposes[@]}"; do
    
    docker-compose -f "../docker/$dockerCompose.yaml" up -d 
    
done