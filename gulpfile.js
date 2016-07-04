var gulp = 			require('gulp');
var browserSync = 	require('browser-sync').create();
var path = 			require('path');

gulp.task('browser-sync', function(){
	browserSync.init({
		server : {
			baseDir: "./"
		}
	});
	//gulp.watch(path.join("js", "*.js"))
	gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);