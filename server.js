const Koa = require('koa');
const koaLogger = require('koa-logger');
var koaJsonLogger = require('koa-json-logger');
const body = require('koa-body');
const filmRouter = require('./routes/film/film.router');
const tipoJugadorRouter = require('./routes/tipo_jugador/tipo_jugador.router');
const mount = require('koa-mount');
const validate = require('koa-validate');
var co = require('co');

var db = require('./db/index');



const app = new Koa();

validate(app);



//var connection = yield db.sequelize.client.sync();

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
//app.use(mount('/v1', filmRouter.routes()));
app.use(mount('/v1', tipoJugadorRouter.routes()));


co(function *(){
    var connection = yield db.sequelize.client.sync();
    if(connection){     
       

 
        var tipos = yield db.sequelize['tipo_estado_jugador'].findAll();

      


        var port = 3000;
        app.listen(port);
        console.log('connected to database and listening on port ' + port);
    }
});


/*

app.listen(3000, function (err) {
    if (err) {
        console.error('Error listening in port 3000', err);
        process.exit(1);
    }
    console.log('Koa server listening in port 3000');
});*/