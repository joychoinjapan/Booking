const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .copy('node_modules/open-sans-all/css/open-sans.css', 'public/css')
    .copy('node_modules/font-awesome/css/font-awesome.css', 'public/css')
    .copy('resources/images','public/images')
    .copy('node_modules/open-sans-all/fonts', 'public/fonts')
    .copy('node_modules/font-awesome/fonts', 'public/fonts')
    .sass('resources/css/style.scss', 'public/css').version();
