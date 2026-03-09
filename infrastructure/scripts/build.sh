#!/bin/bash

projects=("bookstore-commons" "payments" "email-sender" "user-management" "bookstore" "shipping" "healthcheck-app")

baseFolder="../../applications"
tempFolder="../../temp"

rm -rf $baseFolder
rm -rf $tempFolder

git clone https://github.com/marcussimoni/microservices-labs $tempFolder

cp -R $tempFolder/applications $baseFolder

rm -rf $tempFolder

cd "$baseFolder/base-image"
docker build -t base-image:latest .

for project in "${projects[@]}"; do

    folder="$baseFolder/$project"
    echo $folder
    cd $folder
    ./mvnw clean install -DskipTests

    docker build -t "$project-service:latest" . 

done