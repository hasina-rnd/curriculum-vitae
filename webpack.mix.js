const mix = require('laravel-mix');

mix.js('src/js/app.js', 'assets/js/app.js')
    .sass('src/sass/app.scss', 'assets/css/app.css')
    .setPublicPath('assets')
    .extract();