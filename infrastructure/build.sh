#!/bin/bash

cd ../applications/payments

./mvnw clean package -DskipTests

docker build -t payments-service:latest .

cd ../email-sender

./mvnw clean package -DskipTests

docker build -t email-sender-service:latest .

cd ../user-management

./mvnw clean package -DskipTests

docker build -t user-management-service:latest .

cd ../bookstore

./mvnw clean package -DskipTests

docker build -t bookstore-service:latest .

cd ../shipping

./mvnw clean package -DskipTests

docker build -t shipping-service:latest .