module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    react: {
      single_file_output: {
        files: {
          'path/to/output/dir/output.js': 'path/to/jsx/templates/dir/input.jsx'
        }
      },
      combined_file_output: {
        files: {
          'path/to/output/dir/combined.js': [
            'path/to/jsx/templates/dir/input1.jsx',
            'path/to/jsx/templates/dir/input2.jsx'
          ]
        }
      },
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: 'path/to/jsx/templates/dir',
            src: ['**/*.jsx'],
            dest: 'path/to/output/dir',
            ext: '.js'
          }
        ]
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};