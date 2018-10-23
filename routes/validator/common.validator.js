class CommonValidator {

    static async validateId(ctx, next) {

        ctx.checkParams('id').isInt().toInt(10);
        if (ctx.errors && ctx.errors.length > 0) {
            ctx.status = 400;
            ctx.state['body'] = ctx.errors;
            return;
        }
        await next();

    }
}
module.exports = CommonValidator;