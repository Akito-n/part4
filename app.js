var express = require('express');
var blogRouter = require('./controller/blog.ts');
var app = express();
app.use('/api/blogs', blogRouter);
module.exports = app;
