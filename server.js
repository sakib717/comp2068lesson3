"use strict";
/// <reference path= "_reference.ts" />
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 3000;
//Main Route
app.get('/', function (req, res, next) {
    //res.send('Hello Express!');
    res.sendFile(path.join(__dirname, "Public", "index.html"));
});
//Info Route
app.get('/info', function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "info.html"));
});
app.listen(port, function () {
    console.log("App Server Started...on port: " + port);
});
/*
import http = require('http');

var port:number = process.env.port || 3000;
var server:http.Server = http.createServer(
    function(req:http.ServerRequest, res:http.ServerResponse){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("Hello Node!");
});

server.listen(port, function(){
    console.log("Server Started...Listening on port: " + port);
    
}); */ 
//# sourceMappingURL=server.js.map