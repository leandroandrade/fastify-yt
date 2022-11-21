module.exports = async(fastify, opts) => {

    const schema = {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    },
                    today: {
                        type: 'string'
                    }
                }
            }
        }
    }

    function getValueFromDatabase() {
        return {
            message: 'Hello World',
        }
    }

    fastify.get('/', {schema}, async (req, reply) => {
        const responseFromDatabase = getValueFromDatabase();

        const today = fastify.date.getYearMonthDay(new Date());

        return reply.send({
            ...responseFromDatabase,
            today
        })
    });
}
