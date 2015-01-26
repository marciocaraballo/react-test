module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      react: {
        files: 'public/js/**/*.jsx',
        tasks: ['browserify']
      }
    },

    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        src: ['public/js/**/*.jsx'],
        dest: 'public/js/app.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-react');

  // Default task(s).
  grunt.registerTask('default', [
    'browserify'
  ]);

};