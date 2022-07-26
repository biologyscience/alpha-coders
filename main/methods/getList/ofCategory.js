const
    fetch = require('node-fetch'),
    misc = require('../../misc/misc.json');

function ofCategory()
{
    misc.params.forEach(x => x === 'auth' ? null : this.baseURL.searchParams.delete(x));

    this.baseURL.searchParams.set('method', 'category_list');

    return new Promise((resolve) =>
    {
        fetch.default(this.baseURL).then(x => x.json()).then((response) =>
        {
            if (response.success === false) { return require('../../misc/errorHandler')(response); }

            resolve(response.categories);
        });
    });
};

module.exports = ofCategory;