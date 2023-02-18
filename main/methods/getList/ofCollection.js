const misc = require('../../misc/misc.json');

function ofCollection()
{
    misc.params.forEach(x => x === 'auth' ? null : this.baseURL.searchParams.delete(x));

    this.baseURL.searchParams.set('method', 'collection_list');

    return new Promise((resolve) =>
    {
        fetch(this.baseURL).then(x => x.json()).then((response) =>
        {
            if (response.success === false) { return require('../../misc/errorHandler')(response); }

            resolve(response.collections);
        });
    });
};

module.exports = ofCollection;