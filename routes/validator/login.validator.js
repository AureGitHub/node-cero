class LoginValidator {
    static async validateLogin(ctx, next) {
        ctx.checkBody('identificador').notEmpty().len(2, 10);
        ctx.checkBody('password').notEmpty().len(2, 10);

        if (ctx.errors && ctx.errors.length > 0) {
           
            ctx.state['body'] = {error : ctx.errors};
            return;
        }
        await next();

    }

}
module.exports = LoginValidator