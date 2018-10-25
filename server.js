var Koa = require('koa');
var app = new Koa();

const koaLogger = require('koa-logger');
var koaJsonLogger = require('koa-json-logger');
const body = require('koa-body');
const mount = require('koa-mount');
const validate = require('koa-validate');
var routerGeneric = require('./routes/generic-router/generic-router');
var variable = require('./configuracion/variables');

serve   = require('koa-static');
send    = require('koa-send');

validate(app);

app.use(body());

app.use(serve(__dirname + '/public'));



//var connection = yield db.sequelize.client.sync();


if (process.env.NODE_ENV === 'dev11') {    
    app.use(koaJsonLogger({
        name: 'log',
        path: 'logs',
        jsonapi: true
    }));
}


console.log('NODE_ENV: ' + process.env.NODE_ENV);

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




// if (process.env.NODE_ENV === 'dev') {
//     app.use(koaLogger());
// }

//ROUTES
app.use(routerGeneric.routes());


var port = process.env.PORT || 3000;

app.listen(port, function (err) {
    if (err) {
        console.error('Error listening in port ' + port , err);
        process.exit(1);
    }
    console.log('Koa server listening in port '+ port);
});