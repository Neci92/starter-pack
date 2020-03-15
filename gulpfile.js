const { series, src, dest, watch, parallel } = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function styles() {
    return src('src/scss/**/*.scss')
        .pipe(concat('style.min.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss({ compatibility: 'ie11' }))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src('src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('dist/js'));
}

function optimizeImages() {
    return src('src/images/**/*.{png,jpg,jpeg,svg}')
        .pipe(imageMin())
        .pipe(dest('dist/images'));
}

function copyHtml() {
    return src('src/*.html')
        .pipe(dest('dist'));
}

function cleanDist() {
    return src('dist/', {
        read: false,
        allowEmpty: true
    }).pipe(clean());
}

function copyFonts() {
    return src('src/fonts/**/*.{ttf,otf,eot,woff,woff2}', {
        base: 'src'
    }).pipe(dest('dist/'));
}

exports.init = copyHtml;

exports.watch = function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    watch('src/**/*.html').on('change', series(copyHtml, browserSync.reload));
    watch('src/scss/**/*.scss', styles);
    watch('src/js/**/*.js').on('change', series(scripts, browserSync.reload));
    watch('src/images', series(optimizeImages, browserSync.reload));
}

exports.default = series(cleanDist, parallel(scripts, styles, optimizeImages, copyFonts, copyHtml));