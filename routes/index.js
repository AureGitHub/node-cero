var Router = require('koa-router');
var router = new Router();

require('./tipo_jugador/tipo_jugador.router').register(router);

module.exports = router.middleware();