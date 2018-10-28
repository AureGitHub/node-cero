class CommonValidator {

    static async validateId(ctx, next) {

        ctx.checkParams('id').isInt().toInt(10);
        if (ctx.errors && ctx.errors.length > 0) {
            ctx.state['body'] = {error : ctx.errors};
            return;
        }
        await next();

    }
}
module.exports = CommonValidator;