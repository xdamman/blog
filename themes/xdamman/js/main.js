ENV = (window.location.port) ? "development" : "production";

var scripts = {
  "production" : ["analytics","prettify", "domReady!", "timeago!"],
  "development" : ["analytics","prettify", "domReady!","timeago!"]
};

require(scripts[ENV], function(analytics, prettify, selectionSharer) {

  var anchors = document.getElementsByTagName("a");
  for(var i=0, len=anchors.length; i<len; i++) {
    var a = anchors[i];
    if(a.dataset.eventName) {
      a.addEventListener("click", function(e) {
        analytics.track(a.dataset.eventName, a.dataset.eventValue, a.dataset.eventContext);
      });
    }
  }

  var shareTwitter = document.getElementsByClassName("share_twitter")[0];

  shareTwitter.addEventListener("click", function(e) {
    e.preventDefault();
    analytics.track('share_twitter', window.location.href, 'footer');
    var url = 'http://twitter.com/intent/tweet?text='+encodeURIComponent(window.document.title)+'&related=xdamman&url='+encodeURIComponent(window.location.href);
    var w = 640, h=440;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2)-100;
    window.open(url, "share_twitter", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
    return false;
  });
  
  prettify.prettyPrint();

  if( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
  ) { /* mobile user */ }
  else {
      /* desktop user */
    require(['jquery'], function(jQuery) {
      require(['selectionSharer'], function(selectionSharer) {
        var ss = new selectionSharer('p');
      });
    });
  }

});
