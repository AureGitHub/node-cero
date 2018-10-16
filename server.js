const Koa = require('koa');
const koaLogger = require('koa-logger');
var koaJsonLogger = require('koa-json-logger');
const body = require('koa-body');
const filmRouter = require('./routes/film/film.router');
const mount = require('koa-mount');
const validate = require('koa-validate');

const app = new Koa();

validate(app);

app.use(koaJsonLogger({
    name: 'log',
    path: 'logs',
    jsonapi: true
}));

app.use(body());


if (process.env.NODE_ENV === 'dev') {
    app.use(koaLogger());
}


//ROUTES

//sin versionado
//app.use(filmRouter.routes());
//versionado
app.use(mount('/v1', filmRouter.routes()));



app.listen(3000, function (err) {
    if (err) {
        console.error('Error listening in port 3000', err);
        process.exit(1);
    }
    console.log('Koa server listening in port 3000');
});