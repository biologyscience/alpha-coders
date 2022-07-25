const
    fetch = require('node-fetch'),
    misc = require('../../misc/misc.json');

function ofSubCategory(id)
{
    misc.params.forEach(x => x === 'auth' ? null : this.baseURL.searchParams.delete(x));

    this.baseURL.searchParams.set('method', 'sub_category_list');
    this.baseURL.searchParams.set('id', id);

    return new Promise((resolve) =>
    {
        fetch.default(this.baseURL).then(x => x.json()).then((response) =>
        {
            if (response.success === false) { return require('../../misc/errorHandler')(response); }

            resolve(response['sub-categories']);
        });
    });
};

module.exports = ofSubCategory;