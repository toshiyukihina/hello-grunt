module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      coffee: {
        tasks: 'coffee',
        files: ['src/**/*.coffee']
      },
      html: {
        files: ['html/**/*.html']
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'html'
        }
      }
    },
    coffee: {
      compile: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.coffee'],
          dest: 'dest/',
          ext: '.js'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
};
