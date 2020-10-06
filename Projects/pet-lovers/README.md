# Description

We’re developing a new market product that will allow pet lovers anywhere to find the perfect pet match.
Before building the real product, we want to create a showcase MVP to gain investor support.

To help us pitch our product, we want you to create a simple web application that satisfies the following
requirements that we can demo and showcase to our investors.

# What this project contains? 

A pretty simplified Docker Compose workflow that sets up a LEMP network of containers for local Laravel development.

# How to use it

-   Make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system,
-   Download this repo
-   Navigate in your terminal to the directory you cloned this. The first time you should run `docker-compose up --build`. After you can just simple run `docker-compose up`
-   Three additional containers are included that handle Composer, NPM, and Artisan commands without having to have these platforms installed on your local computer. Examples:
    -   docker-compose run --rm composer ...
    -   docker-compose run --rm npm ...
    -   docker-compose run --rm artisan ...
-   At the beginning you should run `docker-compose run --rm npm install` and `docker-compose run --rm composer install`
-   Now you can see the project in http://localhost:8088/

## Folder Structure

-   SCSS' path`./src/resources/sass`
    -   `.../abstracts`
    -   `.../base`
    -   `.../components`
    -   `.../pages`
    -   `.../app.scss`

-   React's path `./src/resources/js`
    -   `.../context`
    -   `.../components`
    -   `.../pages`
    -   `.../utilities`
    -   `.../app.js`
    -   `.../bootstrap.js`
    -   `.../Index.jsx`
    -   `.../Routes.jsx`

-   Php's path `./src/routes`
    -   `.../web.php`

## Author

Carlos Mendez

### Created at

Sep 19th, 2020

#### Algorithms

-   [JavaScript](https://github.com/cjairm/javascript/tree/master/Algorithms-JS)
-   [Go](https://github.com/cjairm/go/tree/master/Algorithms-Go)
-   [TypeScript](https://github.com/cjairm/typescript/tree/master/Algorithms-TS)
