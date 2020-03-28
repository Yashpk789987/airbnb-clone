#! /bin/bash

yarn build:server
docker build -t yashpk2128/airbnb:latest .
docker push yashpk2128/airbnb:latest
ssh root@165.22.219.222 
"docker pull yashpk2128/airbnb:latest && 
docker tag yashpk2128/airbnb:latest dokku/airbnb:latest && 
dokku  proxy:ports-add airbnb  http:80:4000"
