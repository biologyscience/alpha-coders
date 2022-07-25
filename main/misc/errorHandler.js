const misc = require('./misc.json');

function errorHandler(response)
{
    const E = new Error(misc.description + '\nReason: ' + misc.errors[response.error]);

    throw E;
};

module.exports = errorHandler;