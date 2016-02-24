var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('smooch', function() {
    nodemon({
        script: 'smooch',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    });
});
