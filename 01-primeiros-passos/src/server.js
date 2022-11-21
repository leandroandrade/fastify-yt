const app = require('./app')();

app.listen({port: 3000})
    .then(() => console.log('Server started at 3000'))
    .catch(console.error)
