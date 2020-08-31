const express = require('express')
const blogRouter = require('./controller/blog.ts')
const app = express()

app.use('/api/blogs', blogRouter)


module.exports = app
