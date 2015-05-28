module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'stylesheets/screen.css': 'scss/screen.scss'
        },
        options: {
          sourceMap: true,
          includePaths: require('node-neat').includePaths
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'stylesheets',
          src: ['*.css', '!*.min.css'],
          dest: 'stylesheets',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      source: {
        files: ['scss/**/*.scss', 'views/**/*.jade'],
        // tasks: ['sass','cssmin'],
        tasks: ['sass'],

      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass']);

};
