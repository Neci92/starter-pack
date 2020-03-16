# Starter pack for basic Frontend development based on Gulp.js

Install node modules with `npm install`.

## Images
All images in src/images will be optimized and moved to dist/images

## Javascript Files
All js files that are put inside of src/js folder will be concatinated, minified, transpiled to ES5 and moved to dist/js folder by name main.min.js(you should include this file at the bottom of your index.html)

## SCSS - CSS files
Similarely to js files, all scss files in src/scss folder will be concatinated, minified, optimized for older browsers, transpiled to css and moved to dist/css folder by the name style.min.css (you should include this file in the head of your index.html). All globals should be put in top level folder. If you want to structure differently consider compiler will go alphabetically throught top level files first(if you have file named all.scss it will not be able to use variables and mixins from base.scss on same folder level)

## Live reload
Open root folder in terminal and run `npm run dev` to start watching over changes in your project. This will start server with live reload and open it in you default browser. If port 3000 is not taken you will get a message in terminal:

    Local: http://localhost:3000
    External: http://192.168.0.12:3000
    -------------------------------------
    UI: http://localhost:3001
    UI External: http://localhost:3001 

which mean that you can test your project on other devices connected to the same network by using the external link(e.g. If your laptop is connected to same wifi as your mobile phone you can access to your project on mobile by going to http://192.168.0.12:3000).

## Building for production
Build command is added but it doesn't provide more than just watch. Idea is to put only the most necessary tasks on watch and to make it faster and easier to debug and to do full optimization with `npm run build`.