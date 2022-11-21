const fasfify = require('fastify');
const autoLoad = require('@fastify/autoload');
const path = require('path');

function buildApp() {
    const app = fasfify();

    app.register(autoLoad, {
       dir: path.join(__dirname, 'routes')
    });

    app.register(autoLoad, {
        dir: path.join(__dirname, 'decorators')
    });
    return app;
}

module.exports = buildApp
