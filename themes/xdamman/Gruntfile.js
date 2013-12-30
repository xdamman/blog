module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Remove unused CSS across multiple files, compressing the final output
    uncss: {
      dist: {
        files: [
          { src: '*.hbs', dest: 'css/compiled.min.css'}
          ]
        },
        options: {
            compress: false
          , ignore: ["img","p","h1","h2","h3","h4","ul","li",".about p",".post h2", "blockquote","body.page","body.page .lead","body.page #footer", ".post-item .timeago", ".twitter-tweet","table",".table-responsive",".table-hover","table p","thead","tr","td","tbody",".table","th",".table > tbody > tr > td",".table > thead > tr > th",".table > thead:first-child > tr:first-child > th", "body.home h4", "body.page .post-item p",".post img"]
          //, stylesheets: ['css/bootstrap.css']
        }
    },
    requirejs: {
      compile: {
        options: {
          almond: true,
          name: "js/main",
          baseUrl: "",
          mainConfigFile: "js/requirejs.conf.js",
          include: ['timeago','analytics', 'domReady','prettify'],
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
