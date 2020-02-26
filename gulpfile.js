var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

function styles(done) {
  gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe( gulp.dest('./css/') )
    .pipe(browserSync.stream());
  
  done();
}

function browserReload(done){
  browserSync.reload();
  done();
}

function print(done) {
  console.log("All ok");
  done();
}

function sync(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

function watchSass() {
  gulp.watch("./scss/**/*", styles);
}

function watchFiles() {
  gulp.watch("./scss/**/*", styles);
  gulp.watch("./**/*.html", browserReload);
  gulp.watch("./js/**/*.js", browserReload);
}

gulp.task('default', gulp.parallel(sync, watchFiles));
gulp.task(sync);


// gulp.task(styles);

// exports.default = defaultSomeTask;