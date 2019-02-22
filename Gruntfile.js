module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			js: {
				src: ['src/ng-flatpicker.js'],
				dest: 'dist/ng-flatpicker.min.js',
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
