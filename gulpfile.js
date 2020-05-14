const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const { series } = require('gulp');
const concat = require('gulp-concat');

/*
--TOP LEVEL FUNCTIONS --
 gulp.task - Define tasks
 gulp.src - Point to files to use
 gulp.dest - Points to folder to optput
 gulp.watch - Watch files and folders for changes
 */

 // Logs Message
 gulp.task('message', async() =>{
   return console.log('Gulp is running...');
 });

 // // Minify JS
 // gulp.task('minify', () => {
 //   gulp.src('src/js/*.js')
 //   .pipe(uglify())
 //   .pipe(gulp.dest('dist/js'));
 // });

 // Concatinate Scripts
 gulp.task('scripts', async() => {
   return gulp.src('src/js/*.js')
   .pipe(concat('all.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dist/js'));
 });

 // Compile Sass
 gulp.task('sass', async() => {
   gulp.src('src/sass/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('dist/css'));
 });



//Copy all HTML files
gulp.task('copyHtml', async() => {
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', async() =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

// gulp.task('default', async() => (['message', 'copyHtml', 'imageMin', 'sass', 'scripts']));
exports.default = series('message', 'copyHtml', 'imageMin', 'sass', 'scripts');
