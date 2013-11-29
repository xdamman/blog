date: November 10, 2013 

# About
Who am I? Why this website? What will you find here?

### Who am I?
Hi, I'm Xavier Damman. I'm an entrepreneur and an engineer in computer science. I was born and raised in Belgium, but I now live in San Francisco since 2009. I was the cofounder and CEO of [Storify](http://storify.com) that has been [acquired by Livefyre in September 2013](http://storify.com/storify/storify-acquired-by-livefyre). I'm currently working at Livefyre as the General Manager of Storify. 

### Why this site?
It's long overdue that I get back to blogging. It's not that I don't know what to talk about. I have plenty of things, concepts, ideas that I'd love to share. It's just that it's hard for me to put them down in coherent texts. 

But I figured that I should just take a dive and give it try. It's probably the best way to get better at it!

### The tech behind it
I also took the opportunity to write my own NodeJS application to power this website with a focus on easy deployment (using [grunt](http://gruntjs.com)), easy collaboration (using [markdown](http://en.wikipedia.org/wiki/Markdown) files that [anyone can edit on github](http://github.com/xdamman/website-content) and minimalistic design. The goal is to provide a website that focuses on the content and nothing else. CSS is reduced to its strict minimum and inlined within the html page to reduce the number of HTTP requests. Javascript files are minimized and compacted in one single file loaded asynchronously. As a result, the pages load super fast even on a crappy 3G connection and you directly get to what you care about: the content. 

I've open sourced this NodeJS server here: http://github.com/xdamman/website
