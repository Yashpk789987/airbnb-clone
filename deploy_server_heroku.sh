#! /bin/bash


yarn build:server
heroku container:push --app=vast-waters-62733 web
heroku container:release --app=vast-waters-62733 web