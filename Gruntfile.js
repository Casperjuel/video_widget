module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'stylesheets/screen.css': 'scss/screen.scss'
        },
        options: {
          sourceMap: true,
          includePaths: [
            require('node-bourbon').includePaths,
            './bower_components/color-scale',
            './bower_components/type-rhythm-scale',
            './bower_components/rwd-toolkit'
          ]
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      source: {
        files: ['scss/**/*.scss', 'views/**/*.jade'],
        tasks: ['sass','cssmin'],
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass']);

};
