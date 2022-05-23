 'use strict'
// require a koa sample
const Koa = require('koa')
const logger = require('./logger')
// the whole application of the project
const app = new Koa()

global.logger = require('./logger')

// hello world, test git
app.use(async (ctx, next) => {
    logger.debug('test hello world')
    ctx.body = 'hello world'
})

app.listen(3000)