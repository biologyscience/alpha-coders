const process = require('../utils');

function ofCategory()
{
    const url = process.getBaseURL();

    url.searchParams.set('method', 'category_list');

    return new Promise((resolve) =>
    {
        fetch(url).then(x => x.json()).then((response) =>
        {
            if (process.response(response) === null) return resolve(null);

            const send = process.data(response.categories, 'LIST');

            resolve(send);
        });
    });
};

function ofSubCategory(id, page)
{
    const url = process.getBaseURL();

    if (id === undefined) throw new Error('Category ID not provided !');

    url.searchParams.set('method', 'sub_category_list');
    url.searchParams.set('id', id);

    page !== undefined ? url.searchParams.set('page', page) : null;

    return new Promise((resolve) =>
    {
        fetch(url).then(x => x.json()).then((response) =>
        {
            if (process.response(response) === null) return resolve(null);
            
            const send = process.data(response.sub_categories, 'LIST');

            resolve(send);
        });
    });
};

module.exports = { ofCategory, ofSubCategory };