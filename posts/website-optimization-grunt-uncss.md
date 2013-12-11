tags: #livefyre #css #grunt #uncss #optimization #bootstrap

# Use Grunt and unCSS to speed up the load time of your site

More often than not, our phones have a slow, unreliable and high latency connectivity. Yet most common websites are not optimized to make the best use of the limited bandwidth. Let's see how we can optimize that.

| Article page | # Requests | Download size | Load time (3G connection) |
|--------------|------------|---------------|---------------------------|
| [Techcrunch](http://techcrunch.com/2013/12/08/let-it-full-bleed/) | 103 requests | 2.6MB | 35s |
| [Medium](https://medium.com/tech-blogging/3bbbb45587d6) | 78 requests | 2.7MB | 37s |
| [TheNextWeb](http://thenextweb.com/insider/2013/11/06/storify-integrates-twitter-turn-story-slideshow-embed-tweet) | 245 requests | 2.2MB | 46s |
| [NYTIMES.com](http://mobile.nytimes.com/2013/12/10/world/spies-dragnet-reaches-a-playing-field-of-elves-and-trolls.html?from=homepage) | 38 requests | 2.5MB | 31s |
| [CNN.com](http://www.cnn.com/2013/12/09/health/oldest-human-dna/index.html?c=homepage-t) | 59 requests | 0.6MB | 14s |


I've used [Network Link Conditioner](https://developer.apple.com/downloads/index.action?q=Network%20Link%20Conditioner#), the tool provided by Apple to simulate a 3G connection.

![](http://f.cl.ly/items/1Q0r1T3A021u2f1X3z02/Screenshot%202013-12-09%2012.54.51.png) 


There are 3 main strategies to address this: 

| Strategy | Description | Time gain | Efficiency |
|---------| ------------| ----------|----|
| Concatenate | Reduce the number of requests by **concatenating** javascript and css files | ~100ms x number of files concatenated | Really efficient strategy, you can save 1s by concatenating 10 files. Ideally you should only have 1 CSS file and 1 JavaScript file. |
| Minimize | Reduce the file size by **minimizing** javascript and css files | 100ms per 10KB saved | Minimizing `bootstrap.css` saves 20KB (16%). Javascript can be further compressed. `jQuery` minimized is 82KB instead of 236KB. Total saving: 174KB. |
| Reduce | Reduce the file size of your CSS by **removing unused rules** | 100ms per 10KB saved | a typical bootstrap template only uses a fraction of all the CSS rules. You can save 85% of the file size by removing unused rules. That's a 80KB reduction. |

There are plenty of documentation about concatenating and minimizing javascript and CSS files ([grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) is your friend). So here I will mainly focus on the **Reduce strategy**. If you are using CSS libraries like [Bootstrap](http://getbootstrap.com) or if your CSS files are old and full of legacy code, then you probably have a lot of unused rules that take bandwidth for no reason. 

What follows assumes a very simple HTML site with the following directory structure:

    src/
     |- js/
        |- bootstrap.min.js
     |- css/
     	|- bootstrap.css
     	|- carousel.css // custom css file       	  
     |- index.html


## Automatically remove unused CSS rules

[Grunt](http://gruntjs.com/) is a Javascript task runner. It's very helpful to manage installation process and builds. That way you can keep your development environment easy to manage and only compile/concatenate/minimize before deploying to production. 

You can install Grunt with npm

    npm install -g grunt-cli
    
There are a bunch of common tasks that have already been developed for Grunt (see the [Grunt Plugin Directory](http://gruntjs.com/plugins)). We'll install 4 of them: [grunt-contrib-copy][], [grunt-processhtml][], [grunt-contrib-uglify] and [grunt-uncss][].

    npm install grunt-contrib-copy grunt-processhtml grunt-uncss grunt-contrib-uglify --save-dev

Now let's add a `Gruntfile.js` to configure those plugins:

```javascript    
module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      dist: {
        cwd: 'src/', expand: true, src: '**', dest: 'dist/'
      }
    },
    // Remove unused CSS across multiple files, compressing the final output
    uncss: {
    dist: {
      files: [
        { src: 'src/*.html', dest: 'dist/css/compiled.min.css'}
      ]
      },
      options: {
        compress:true
      }
    },
    processhtml: {
      dist: {
        files: {
        'dist/index.html': ['src/index.html']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/compiled.min.js': ['src/js/jquery.js','src/js/*.js'] // make sure we load jQuery first
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default tasks.
  grunt.registerTask('default', ['copy', 'uglify', 'uncss','processhtml']);

};
```   

By running `grunt`, it will 

1. copy the entire `src/` directory into the `dist/` directory
1. concatenate and minimize all the javascript files in one file `dist/js/compiled.min.js`
1. scan all your html files in `src/`, extract all the stylesheets, dom elements and classes and create one single CSS file with only the rules that match your dom elements
1. minimize the resulting CSS and save it in `dist/css/compiled.min.css` 

The result built version will look something like that:

	package.json // npm package configuration file
	Gruntfile.js // Grunt configuration file
    dist/
     |- js/
        |- bootstrap.min.js
     |- css/
     	|- compiled.min.css   	  
     |- index.html
    src/
     |- ...

The last thing to do is to make sure that your `index.html` file in the `dist/` directory loads the new compiled CSS instead of the two former CSS files. To do so, we'll use the `grunt-processhtml` plugin. In your `src/index.html` file just add the following HTML comments:

```HTML
<!-- build:css css/compiled.min.css -->
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/carousel.css" rel="stylesheet">
<!-- /build -->
```

and same thing for the javascript scripts at the bottom of the file:

```HTML
<!-- build:js js/compiled.min.js -->
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.js"></script>
  <script src="js/holder.js"></script>
<!-- /build -->
```

## Before

| File | Size |
|-----|--------|
| [src/css/bootstrap.css](http://getbootstrap.com/dist/css/bootstrap.css) | 120KB |
| [src/css/bootstrap.min.css](http://getbootstrap.com/dist/css/bootstrap.min.css) | 97KB |
| [src/css/carousel.css](http://getbootstrap.com/examples/carousel/carousel.css) | 2.6KB |

## After

| File | Size | Gain |
|-----|--------|------|
| src/css/compiled.min.css | 13KB | 86.6KB (87%) |


## Try for yourself

This is the list of commands that will create the directory structure to test this method with the [Bootstrap Carousel Template Example](http://getbootstrap.com/examples/carousel/).
This assumes that you already have `node` and `npm` installed.

```bash
# Skip this if you already have grunt installed
npm install -g grunt-cli

mkdir src
mkdir src/css
mkdir src/js

# Downloading the different files
curl "http://getbootstrap.com/examples/carousel/" > src/index.html
curl "http://getbootstrap.com/examples/carousel/carousel.css" > src/css/carousel.css
curl "http://getbootstrap.com/docs-assets/js/holder.js" > src/js/holder.js
curl "http://getbootstrap.com/dist/css/bootstrap.css" > src/css/bootstrap.css
curl "http://getbootstrap.com/dist/js/bootstrap.js" > src/js/bootstrap.js
curl "https://code.jquery.com/jquery-1.10.2.js" > src/js/jquery.js

# /!\ You'll need to manually edit `src/index.html` to link to the correct css and js files

npm install grunt-uncss grunt-processhtml grunt-contrib-copy grunt-contrib-uglify

# Create a Gruntfile.js as described above and then run:
grunt

```

## Limitations

The [uncss](https://github.com/giakki/uncss) library only works with static html files. That means that if you add any html using Javascript, it won't include the CSS rules that match any new html tag or class. A quick solution is to add in the `Gruntfile.js` the `ignore` option for the `grunt-uncss` task. You can pass an array of CSS rules to always include. That works but it's not ideal. It would be better to make use of `PhantomJS` to automatically generate the page on the fly.

[grunt-contrib-copy]: https://github.com/gruntjs/grunt-contrib-copy
[grunt-processhtml]: https://github.com/dciccale/grunt-processhtml
[grunt-contrib-uglify]: https://github.com/gruntjs/grunt-contrib-uglify
[grunt-uncss]: https://github.com/addyosmani/grunt-uncss

