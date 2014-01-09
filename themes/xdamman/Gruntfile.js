module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Remove unused CSS across multiple files, compressing the final output
    uncss: {
      dist: {
        files: {
          'css/compiled.min.css': ['layout.hbs']
        },
        options: {
            compress: true
          , ignore: [/selectionShare/,/shareSelectionPop/,/\.prettyprint.*/,/\.linenums/, '.com','.lit','.pun','.opn','.clo','.fun','.str','.atv ','.kwd','.typ','.atn','.dec','.var ','.pln']
          , urls: ['http://localhost:3000/xdamman/blog/?env=development','http://localhost:3000/xdamman/blog/about','http://localhost:3000/xdamman/blog/website-optimization-grunt-uncss','http://localhost:3000/xdamman/blog/apple-focus-productivity']
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          almond: true,
          name: "js/main",
          baseUrl: "",
          mainConfigFile: "js/requirejs.conf.js",
          include: ['timeago','analytics', 'domReady','prettify','selectionSharer'],
          out: "js/compiled.min.js",
          optimize: 'uglify2',
          preserveLicenseComments: false
        }
      }
    },
    bumper: {
      options: {
          files: ['package.json','bower.json']
        , pushTo: 'deploy'
        , runTasks: false 
      }
    },
    shell: {
      'npm-stop': {
        command: "npm stop"
      },
      'clean': {
        command: 'echo "" > css/compiled.min.css'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-bumper');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['shell:clean','uncss','requirejs']);
  grunt.registerTask('deploy', ['default','bumper']);

};
