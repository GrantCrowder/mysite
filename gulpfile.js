const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
return gulp.src('./scss/**/*.scss')

.pipe(sass())

.pipe(gulp.dest('./css'))



}





function watch() {

browserSync.init({
baseDir: "./"

});

gulp.watch('./scss/*/*.scss', style)
gulp.watch('./*.html').on('change', browserSync.reload);
gulp.watch('./js/*/*.js', style)
}

exports.style = style;
exports.watch = watch;