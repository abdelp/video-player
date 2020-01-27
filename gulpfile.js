const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
exports.styles = () => (
    gulp.src('assets/stylesheets/styles.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('build'))
);