const  GULP = require('gulp')
const SASS = require('gulp-sass')(require('sass'))
const SOURCEMAPS = require('gulp-sourcemaps')

GULP.task('sass', ()=>{
    return GULP.src('./sass/**/*.sass')
        .pipe(SOURCEMAPS.init())
        .pipe(SASS({}).on('error', SASS.logError))
        .pipe(SOURCEMAPS.write())
        .pipe(GULP.dest('./css'));
});

GULP.task('watch', ()=>{
    GULP.watch('./sass/**/*.sass', GULP.series('sass'));
});

GULP.task('default', GULP.series('sass', 'watch'));