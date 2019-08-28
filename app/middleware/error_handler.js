'use strict';

module.exports = (options, app) => {
    return async function errorHandler(ctx, next) {
        let error;
        try {
            await next();
        } catch (err) {
            error = err;
            const config = app.config.errorHandler2;
            const { code } = err;
            const message = err.message || err;
            const body = { code, message };
            if (err.code === 'invalid_param') {
                ctx.failed({ code: 2001, message: err.errors });
                return;
            }
            if (!config || !config.protection) {
                ctx.failed(body);
            } else {
                if (app.config.env !== 'prod') {
                    ctx.failed(body);
                    return;
                }
                if (typeof err === 'string') {
                    ctx.failed(body);
                    return;
                }
                for (const CustomError of config.ignore) {
                    if (err instanceof CustomError) {
                        ctx.failed(body);
                        return;
                    }
                }
                if (!config.tips) {
                    ctx.failed({ code: 500, message: 'Internal Server Error' });
                } else {
                    ctx.failed({ code: 500, message: config.tips });
                }
            }
        } finally {
            if (error) {
                app.emit('error', error, ctx);
            }
        }
    };
};
