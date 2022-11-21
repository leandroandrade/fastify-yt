const t = require('tap');
const fastify = require('fastify');
const dateDecorator = require('../src/decorators/date-decorator');
const {test} = t;

test('should return year month day', async t => {
    const app = fastify();
    t.teardown(async () => {
        await app.close();
    });

    await app.register(dateDecorator);

    const customDate = new Date('2020-12-12');
    t.same(app.date.getYearMonthDay(customDate), '2020-12-12');
});
