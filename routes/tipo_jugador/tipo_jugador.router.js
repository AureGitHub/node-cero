const Router = require('koa-router');
const CommonValidator = require('../validator/common.validator');
var service = require('../../db/index');




const table ='tipo_jugador';



// var getAll = function *getAll(){
//     var items = yield service.sequelize[table].findAll();
//     this.body = items;
// }

const router = new Router({
    prefix: '/tipojugador'
});


 router.get('/',(ctx, next) => {
     return service.sequelize[table].findAll().then(function(datos) {
       ctx.body = datos;
       next();
     });
   },
   ctx => {
     console.log(ctx.user);
   }
 );


//  router.get('/',function (ctx, next) {
    
//       ctx.body = yield service.sequelize[table].findAll();;
   
//   }
// );

// router.get('/',getAll);

module.exports = router;