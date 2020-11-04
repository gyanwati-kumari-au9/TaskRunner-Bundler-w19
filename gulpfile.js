var gulp = require('gulp');
var sass = require('gulp-sass');
const babel = require('gulp-babel');

const gutil = require('gulp-util');

// //define a task with the name of 'default'
// // and a callback to perform when the task is ran

// function clean(cb) {
//     // body omitted
//     cb();
// }

// function build(cb) {
//     // body omitted
//     cb();
// }
function styles() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
}

function scripts() {
    return gulp.src('src/**/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
}

// gulp.task('styles', function() {
    
// });

gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',gulp.series(styles));
    gulp.watch('src/**/*.js',gulp.series(scripts));
});


// gulp.task('scripts', function () {
    
// });

