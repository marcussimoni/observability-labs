#!/bin/bash

dockerComposes=("docker-compose-apps" "docker-compose-dbs" "docker-compose-messages" "docker-compose-utilities" "docker-compose-observability" "docker-compose-nginx")

for dockerCompose in "${dockerComposes[@]}"; do
    
    docker-compose -f "../docker/$dockerCompose.yaml" down 
    
done

docker network rm infra_network