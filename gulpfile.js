var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('heroku', function() {
    nodemon({
        script: 'heroku',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    });
});
