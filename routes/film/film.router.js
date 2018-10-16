
const Router = require('koa-router');
const CommonValidator = require('../validator/common.validator');

let films = [];
let nextId = 0;
class FilmRouter {
    static async get(ctx) {
       
        ctx.body = films;
    }
    static async getById(ctx) {
     
        const film = films.find((f) => f.id === +ctx.params.id);
        if (!film) {
            ctx.throw(404, 'Film not found');
            return;
        }
        ctx.body = film;
    }
    static async create(ctx) {
       
        const film = ctx.request.body;
        film.id = nextId++;
        films.push(film);
        ctx.body = film;
    }
    static async update(ctx) {
       
        let film = null;
        films = films.map((f) => {
            if (f.id === +ctx.params.id) {
                film = Object.assign(f, ctx.request.body);
                return film;
            }
            return f;
        });
        if (!film) {
            ctx.throw(404, 'Film not found');
            return;
        }
        ctx.body = film;
    }

    static async delete(ctx) {
        
        const before = films.length;
        films = films.filter((f) => f.id !== +ctx.params.id);
        if (films.length >= before) {
            ctx.throw(404, 'Film not found');
            return;
        }
        ctx.body = null;
    }
}
const router = new Router({
    prefix: '/film'
});
router.get('/', FilmRouter.get);
router.get('/:id',CommonValidator.validateId, FilmRouter.getById);
router.post('/', FilmRouter.create);
router.put('/:id',CommonValidator.validateId, FilmRouter.update);
router.delete('/:id',CommonValidator.validateId, FilmRouter.delete);
module.exports = router;