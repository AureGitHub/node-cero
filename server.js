var Koa = require('koa');
var app = new Koa();

const koaLogger = require('koa-logger');
var koaJsonLogger = require('koa-json-logger');
const body = require('koa-body');
const mount = require('koa-mount');
const validate = require('koa-validate');
var routerGeneric = require('./routes/generic-router/generic-router');
var variable = require('./configuracion/variables');

validate(app);

app.use(body());

//var connection = yield db.sequelize.client.sync();

app.use(koaJsonLogger({
    name: 'log',
    path: 'logs',
    jsonapi: true
}));


app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const end = Date.now();
    //set the header
    ctx.set('X-Response-Time-Start', `${start} ms`);
    ctx.set('X-Response-Time', `${end - start} ms`);

   

    ctx.body = ctx.state['body'];
    ctx.set(variable.KeySecure, JSON.stringify(ctx.state[variable.KeySecure]));

});




if (process.env.NODE_ENV === 'dev') {
    app.use(koaLogger());
}

//ROUTES
app.use(routerGeneric.routes());



app.listen(3000, function (err) {
    if (err) {
        console.error('Error listening in port 3000', err);
        process.exit(1);
    }
    console.log('Koa server listening in port 3000');
});