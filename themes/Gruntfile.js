module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      dist: {
        files: [
           { cwd: 'src/', src: '**', dest: 'dist/', expand: true, filter: function(filepath) { return (!(filepath.match(/public\/css\//) || filepath.match(/public\/js\//))); } }
         , { cwd: 'dist/css/', src: 'bootstrap.css', dest: 'src/css/', expand: true }
        ]
      }
    },
    // Remove unused CSS across multiple files, compressing the final output
    uncss: {
      dist: {
        files: [
          { src: 'src/*.hbs', dest: 'dist/css/compiled.min.css'}
          ]
        },
        options: {
            compress: false
          , ignore: ["p","h1","h2","h3","h4","ul","li",".about p",".post h2", "blockquote","body.page","body.page .lead","body.page #footer", ".post-item .timeago", ".twitter-tweet","table",".table-responsive",".table-hover","table p","thead","tr","td","tbody",".table","th",".table > tbody > tr > td",".table > thead > tr > th",".table > thead:first-child > tr:first-child > th", "body.home h4", "body.page .post-item p"]
          //, stylesheets: ['src/css/bootstrap.css']
        }
    },
    processhtml: {
      dist: {
        files: {
          'xdamman/views/layout.hbs': ['src/layout.hbs']
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          almond: true,
          name: "main",
          baseUrl: "src/",
          mainConfigFile: "src/requirejs.conf.js",
          include: ['timeago','analytics', 'domReady','prettify'],
          out: "dist/js/optimized.min.js",
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
    asset_cachebuster: {
      options: {
          buster: "<%= pkg.version %>"
        , htmlExtension: "hbs"
      },
      dist: {
        files: {
          'src/layout.hbs':['xdamman/layout.hbs']
        }
      }
    },
    shell: {
      'npm-stop': {
        command: "npm stop"
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-bumper');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-asset-cachebuster');

  // Default task(s).
  grunt.registerTask('default', ['copy','uncss','requirejs','processhtml','asset_cachebuster']);
  grunt.registerTask('deploy', ['default','bumper']);

};
