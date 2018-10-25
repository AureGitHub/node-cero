const Router = require('koa-router');
const CommonValidator = require('../validator/common.validator');
const LoginValidator = require('../validator/login.validator');
var db = require('../../db/index');
var tokenGen = require('../../token/token');
var variable = require('../../configuracion/variables');
var enumProfile = require('../../configuracion/enum').enumProfile;

var jwt = require("jwt-simple");




var GestionPermisos=async  (ctx,permission)=>{  
  
  var token = ctx.request.headers[variable.KeySecure];
  if(!token){
    ctx.throw(403, 'no autorizado');
  }

  var decoded = jwt.decode(token, variable.JWT_SECRET);

  if (decoded.exp <= Date.now()) {
    ctx.throw(403, 'su sesión ha expirado');
  }

  if(!decoded.user){
    ctx.throw(403, 'token de seguridad incorrecto');
  }

  //paso de user en claro.. utilizo el Id del user encriptado

  const user = await db.service.get('user', decoded.user.id);
  if(!user){
    ctx.throw(403, 'token de seguridad incorrecto');
  }


  if(!permission[ctx.method].includes(enumProfile.all) &&
          !permission[ctx.method].includes(user.id_tipo_user)
      ){
        ctx.throw(403, 'no autorizado');
      }
  return user;


}

var SetSecure = function (user, ip) {
  return {
    token: tokenGen.OnlygenToken(user, ip),
    user: {
      usuario: user.usuario,
      nombre: user.nombre,
      email: user.correo_externo == null ? user.usuario + '@tragsa.es' : user.correo_externo,
      profile: user.id_tipo_user
    }

  }
}

var login = async (ctx) => {

  var user = await db.service.login(ctx.request.body.identificador, ctx.request.body.password);

  if (!user) {
    ctx.throw(401, 'identificador / password incorrecto');
  }


  ctx.state['body'] ={};
  ctx.state[variable.KeySecure]=SetSecure(user, ctx.request.ip);

}




var getAll = async (ctx, next) => {
  var items = await db.service.getAll(ctx.url.split('/')[1]);

  ctx.state['body'] = {
    data: items,
    error: false
  }

}

var getById = async (ctx) => {
  const item = await db.service.get(ctx.url.split('/')[1], +ctx.params.id);
  if (!item) {
    //throw Error('item not found');
    ctx.throw(404, 'item not found');
    return;
  }

  ctx.state['body'] = {
    data: item,
    error: false
  }

}


var create = async (ctx) => {
  const item = await db.service.create(ctx.url.split('/')[1], ctx.request.body);
  if (!item) {
    ctx.throw(404, 'item not found');
    return;
  }

  ctx.state['body'] = {
    data: item,
    error: false
  }



}

const update = async (ctx) => {
  const item = await db.service.update(ctx.url.split('/')[1], +ctx.params.id, ctx.request.body);
  if (!item) {
    ctx.throw(404, 'item not found');
    return;
  }
  ctx.state['body'] = {
    data: item,
    error: false
  }
}

var destroy = async (ctx) => {
  const item = await db.service.destroy(ctx.url.split('/')[1], +ctx.params.id);
  if (!item) {
    ctx.throw(404, 'item not found');
    return;
  }
  ctx.state['body'] = {
    data: item,
    error: false
  }
}





const awaitErorrHandlerFactory = middleware => {
  return async (ctx, next) => {
    try {

      if(variable.SecureActivated){
        var user=await GestionPermisos(ctx,db.sequelize[ctx.url.split('/')[1]].options.permission);
      }

      

      await middleware(ctx, next);

      
      if(variable.SecureActivated){
        ctx.state[variable.KeySecure]=SetSecure(user, ctx.request.ip);
      }


      

      
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500;
      ctx.state['body'] = {
        status: ctx.status,
        message: err.message,
        error: true,
        url: ctx.url
      };
    }
  };
};

const router = new Router();

router.post('/login',LoginValidator.validateLogin, login);

router.get('/modeSecure/:mode', (ctx)=>
{
  
  variable.SecureActivated = ctx.params.mode=='Off' ? false : true;
    
})

router.get('index.html',async () => {
  await send(this, __dirname + '/index.html');
});





//Para cada tabla, creo sus entradas en el router
db.sequelize.tables.forEach(table => {
  router.get('/' + table + '/', awaitErorrHandlerFactory(getAll));
  router.get('/' + table + '/:id', CommonValidator.validateId, awaitErorrHandlerFactory(getById));
  router.post('/' + table + '/', awaitErorrHandlerFactory(create));
  router.put('/' + table + '/:id', CommonValidator.validateId, awaitErorrHandlerFactory(update));
  router.delete('/' + table + '/:id', CommonValidator.validateId, awaitErorrHandlerFactory(destroy));
});





module.exports = router;
