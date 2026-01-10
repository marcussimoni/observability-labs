#!/bin/bash

projects=("payments" "email-sender" "user-management" "bookstore" "shipping" "healthcheck-app")

baseFolder="../../applications"
tempFolder="../../temp"

rm -rf $baseFolder
rm -rf $tempFolder

git clone https://github.com/marcussimoni/microservices-labs $tempFolder

cp -R $tempFolder/applications $baseFolder

rm -rf $tempFolder

for project in "${projects[@]}"; do

    folder="$baseFolder/$project"
    cd $folder
    ./mvnw clean package -DskipTests

    docker build -t "$project-service:latest" . 

done