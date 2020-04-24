const gulp = require('gulp');


module.exports = function db() {
    return gulp.src('src/db/*.json')
        .pipe(gulp.dest('build/db'))
};
