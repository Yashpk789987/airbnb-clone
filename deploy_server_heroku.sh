#! /bin/bash

yarn build:server
heroku container:push web
heroku container:release web