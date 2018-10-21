const Router = require('koa-router');
const CommonValidator = require('../validator/common.validator');
var db = require('../../db/index');

//http://localhost:3000/jugador/

var getAll = async (ctx, next) => {
  var items = await db.service.getAll(ctx.url.split('/')[1]);

  ctx.state['body']  = {
    data :  items,
    error :  false 
  } 

}

var getById = async (ctx) => {
  const item = await db.service.get(ctx.url.split('/')[1], +ctx.params.id); 
  if (!item) {
    //throw Error('item not found');
    ctx.throw(404, 'item not found');
    return;
  }

  ctx.state['body']  = {
    data :  item,
    error :  false 
  }  

}


var create = async (ctx) => {
  const item = await db.service.create(ctx.url.split('/')[1], ctx.request.body);
  if (!item) {
    ctx.throw(404, 'item not found');
    return;
  }

  ctx.state['body']  = {
    data :  item,
    error :  false 
  }  

  

}

const update = async (ctx) => {
  const item = await db.service.update(ctx.url.split('/')[1], +ctx.params.id, ctx.request.body);
  if (!item) {
    ctx.throw(404, 'item not found');
    return;
  }
  ctx.state['body']  = {
    data :  item,
    error :  false 
  }  
}

var destroy = async (ctx) => {
  const item = await db.service.destroy(ctx.url.split('/')[1], +ctx.params.id);
  if (!item) {
    ctx.throw(404, 'item not found');
    return;
  }
  ctx.state['body']  = {
    data :  item,
    error :  false 
  }  
}


const awaitErorrHandlerFactory = middleware => {
  return async (ctx, next) => {
    try {
      await middleware(ctx, next);      
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500;
      ctx.state['body'] = {        
        status : ctx.status,
        message: err.message,
        error : true,
        url : ctx.url
      };
    }
  };
};

const router = new Router();

//Para cada tabla, creo sus entradas en el router
db.sequelize.tables.forEach(table => {
  router.get('/' + table + '/', awaitErorrHandlerFactory(getAll));
  router.get('/' + table + '/:id', CommonValidator.validateId, awaitErorrHandlerFactory(getById));
  router.post('/' + table + '/', awaitErorrHandlerFactory(create));
  router.put('/' + table + '/:id', CommonValidator.validateId, awaitErorrHandlerFactory(update));
  router.delete('/' + table + '/:id', CommonValidator.validateId, awaitErorrHandlerFactory(destroy));
});





module.exports = router;
