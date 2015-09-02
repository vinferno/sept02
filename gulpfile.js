var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect');

var htmlSources = ['*.html'];
var scssSources = ['scss/*.scss'];
var jsSources = ['js/*.js'];

gulp.task('html', function(){
	gulp.src(htmlSources)
		.pipe(connect.reload());
});

gulp.task('compass', function(){
	gulp.src(scssSources)
		.pipe(compass({
			sass: 'scss/',
			image: 'img/',
			style: 'expanded'
		}).on('error', gutil.log))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: true	
		}))
		.pipe(gulp.dest('css/'))
		.pipe(connect.reload());
});

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(browserify())
		.pipe(connect.reload());
});

gulp.task('connect', function(){
	connect.server({
		root: '',
		livereload: true	
	});	
});

gulp.task('watch', function(){
	gulp.watch(htmlSources, ['html']);
	gulp.watch(scssSources, ['compass']);
	gulp.watch(jsSources, ['js']);
});

gulp.task('default', ['watch', 'html', 'compass', 'js', 'connect']);