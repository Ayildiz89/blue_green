var express = require('express')
var app = express()
var port = 3000
var ip = require('ip');
///////////////WEB ROUTERS

/// ADD HOOK TO MAKE  IT EASIER TO GET ALL WISITED URLS
app.use(function(req,res,next){
  app.get('/',function(req,res){
    res.send('hello wolrld blue ' + ip.address() + ":" + port)
  })
  next();
});
// https server
var server = app.listen(port)
console.log('server is listenining ' + port)
