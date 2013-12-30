require.config({
  baseUrl: "src/",
  paths: {
      domReady: "../lib/requirejs-domready/domReady"
    , timeago: "js/timeago"
    , prettify: "../lib/google-code-prettify/src/prettify"
    , jquery: '../lib/jquery/jquery'
  },
  shim: {
    jquery: {
        exports: '$'
    }
  }
});
