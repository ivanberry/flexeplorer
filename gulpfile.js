//包含gulp
var gulp = require('gulp');

//CSS插件
var less = require('gulp-less'),
	//autoprefixer = require('gulp-autoprefixer'),
	//cssmin = require('gulp-cssmin')
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass');


//JS插件
var jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish');

gulp.task('lint', function() {
	return gulp.src('./js/custom.js') //针对自己写的脚本hint
	    .pipe(jshint())
		.pipe(jshint.reporter(stylish));

		});

	//Static server and watching the less/html files

gulp.task('server', ['less'], function() {
		
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch("./less/**/*.less", ['less', 'less-watch']);
	gulp.watch("./*.html").on('change', browserSync.reload);
	gulp.watch("./css/*.css").on('change', browserSync.reload);
	gulp.watch("./hs/*.js").on('change', browserSync.reload);

});

//compile less into css and auto-inject int to browsers
gulp.task('less', function(){
	return gulp.src("less/main.less")
           .pipe(less())
	       .pipe(gulp.dest("./css"))
	       .pipe(browserSync.stream());

});

gulp.task('sass', function(){
	return gulp.src("sass/main.sass")
	       .pipe(sass())
	       .pipe(gulp.dest("./css"))
	       .pipe(browserSync.stream());
	
});

gulp.task('less-watch', ['less'], browserSync.reload);
gulp.task('default', ['server', 'lint']);


