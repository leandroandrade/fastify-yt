const fp = require('fastify-plugin');

function getYearMonthDay(date) {
    return date.toISOString().split('T')[0];
}

async function dateDecorator(fastify, opts) {
    fastify.decorate('date', {
        getYearMonthDay
    });
}

module.exports = fp(dateDecorator)
