 'use strict'
// require a koa sample
const Koa = require('koa')
// the whole application of the project
const app = new Koa()
// hello world, test git
app.use(async (ctx, next) => {
    ctx.body = 'hello world'
})

app.listen(3000)