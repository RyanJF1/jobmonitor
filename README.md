## About

JobMonitor is a personal project used to showcase my programming skills.

It will function as a way to keep track of resumes and job applications.

Languages/Frameworks:
-Laravel
-React

## Start

Add `@import '../css/app.css';` to resources/views/sass/app.scss to use custom css
Custom css goes in resources/css/app.css

Install dependencies: `composer install`
Update dependencies: `composer update`
Migrate database: `php artisan migrate`
Rebuild database: `php artisan migrate:refresh --seed`

## Commands

Compile code `npm run watch`
JS/CSS must be compiled for changes to take effect. This command restarts the webserver on each save.

Start dev server: `php artisan serve`
## GitHub

View the JobMonitor repository on GitHub: https://github.com/RyanJF1/jobmonitor

## Help

Char length error:
    Change lines 55/56 in config/database.php to
    `'charset' => 'utf8',`
    `'collation' => 'utf8_unicode_ci',`
