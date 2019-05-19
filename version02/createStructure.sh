#!/bin/bash
###
### Create Folders
###
mkdir -vp config
mkdir -vp controllers
mkdir -vp db
mkdir -vp models
mkdir -vp public
cd public
mkdir -vp assets
mkdir -vp assets/css
mkdir -vp assets/js
cd ..
mkdir -vp views
mkdir -vp views/layouts
mkdir -vp views/partials
mkdir -vp views/partials/dogs
###
### Create Files
###
touch config/connection.js
touch config/orm.js
touch controllers/dogsController.js
touch db/schema.sql
touch db/seeds.sql
touch models/dog.js
touch public/assets/css/style.css
touch public/assets/js/dogs.js
touch views/index.handlebars
touch views/layouts/main.handlebars
touch views/partials/dogs/dog-block.handlebars
touch server.js
