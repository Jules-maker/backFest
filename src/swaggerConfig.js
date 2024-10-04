const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Electric Lamb API',
            version: '1.0.0',
            description: 'API documentation for Electric Lamb',
        },
    },
    apis: ['./src/routes/*.js', './src/database/models/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;