'use strict';

module.exports = (options, app) => {
    return async function errorHandler(ctx, next) {
        let error;
        try {
            await next();
        } catch (err) {
            error = err;
            const config = app.config.errorHandler2;
            const message = err.message || err;
            if (!config || !config.protection) {
                ctx.failed({ message });
            } else {
                if (app.config.env !== 'prod') {
                    ctx.failed({ message });
                    return;
                }
                if (typeof err === 'string') {
                    ctx.failed({ message });
                    return;
                }
                if (err.code === 'invalid_param') {
                    ctx.failed({ message: err.errors });
                    return;
                }
                for (const item of config.ignore) {
                    if (err instanceof item) {
                        ctx.failed({ message: err.name + ':' + message });
                        return;
                    }
                }
                if (!config.tips) {
                    ctx.failed({ message: 'Internal Server Error' });
                } else {
                    ctx.failed({ message: config.tips });
                }
                app.emit('error', error, ctx);
            }
        }
    };
};
