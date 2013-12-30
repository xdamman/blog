require.config({
  baseUrl: "",
  paths: {
      domReady: "lib/requirejs-domready/domReady"
    , prettify: "lib/google-code-prettify/src/prettify"
    , jquery: 'lib/jquery/jquery'
    , timeago: "js/timeago"
    , analytics: "js/analytics"
  },
  shim: {
    jquery: {
        exports: '$'
    }
  }
});
