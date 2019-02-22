module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			js: {
				src: ['src/ng-flatpickr.js', 'src/test.js'],
				dest: 'dist/ng-flatpickr.min.js',
			}
		},
		watch: {
			js: {
				files: ['src/**/*.js'],
				tasks: ['concat:js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['concat', 'watch']);
};
