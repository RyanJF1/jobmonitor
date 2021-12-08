## About

Site built using Laravel + React

View the JobMonitor repository on GitHub: https://github.com/RyanJF1/jobmonitor
## Start

1. `composer install` to install vendor folder
2. `npm install` to install node_modules folder
3.  Rename .env.example to .env and configure environment
3. `php artisan key:generate` to generate APP_KEY
3. `docker-compose build` to build containers
4. `docker-compose up -d` to bring containers up in detached mode
5. `docker-compose run app php artisan migrate --seed` to migrate and seed database

Web App: http://localhost:9100
Database: http://localhost:9101

Web App Login
Username: `admin@localhost`
Password: `password`

Database Login
Username: `admin`
Password: `password`

Run commands inside container with `docker-compose run app <comamnd>`
## Help

Build code: `npm run watch`

## GitHub

View the JobMonitor repository on GitHub: https://github.com/RyanJF1/jobmonitor
