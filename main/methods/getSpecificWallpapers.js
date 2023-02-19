const process = require('../utils');

function bySort(sorting, options)
{
    if (sorting === undefined) throw new Error('Sort type is not provided !');

    const url = process.getBaseURL();

    url.searchParams.set('method', sorting === 'rating' ? 'highest_rated' : sorting);

    process.params(options).forEach(x => url.searchParams.set(x[0], x[1]));

    return new Promise((resolve) =>
    {
        fetch(url).then(x => x.json()).then((response) =>
        {
            if (process.response(response) === null) return resolve(null);

            const send = process.data(response.wallpapers, 'WALLPAPER');

            resolve(send);
        });
    });
};

function fromCategory(id, options)
{
    const url = process.getBaseURL();

    if (id === undefined) throw new Error('Category ID not provided !');

    url.searchParams.set('method', 'category');
    url.searchParams.set('id', id);

    process.params(options).forEach(x => url.searchParams.set(x[0], x[1]));

    return new Promise((resolve) =>
    {
        fetch(url).then(x => x.json()).then((response) =>
        {
            if (process.response(response) === null) return resolve(null);

            const send = process.data(response.wallpapers, 'WALLPAPER');

            resolve(send);
        });
    });
};

function fromSubCategory(id, options)
{
    const url = process.getBaseURL();

    if (id === undefined) throw new Error('Sub-Category ID not provided !');

    url.searchParams.set('method', 'sub_category');
    url.searchParams.set('id', id);

    process.params(options).forEach(x => url.searchParams.set(x[0], x[1]));

    return new Promise((resolve) =>
    {
        fetch(url).then(x => x.json()).then((response) =>
        {
            if (process.response(response) === null) return resolve(null);
            
            const send = process.data(response.wallpapers, 'WALLPAPER');

            resolve(send);
        });
    });
};

function fromTag(id, options)
{
    const url = process.getBaseURL();

    if (id === undefined) throw new Error('Tag ID not provided !');

    url.searchParams.set('method', 'tag');
    url.searchParams.set('id', id);

    process.params(options).forEach(x => url.searchParams.set(x[0], x[1]));

    return new Promise((resolve) =>
    {
        fetch(url).then(x => x.json()).then((response) =>
        {
            if (process.response(response) === null) return resolve(null);

            const send = process.data(response.wallpapers, 'WALLPAPER');

            resolve(send);
        });
    });
};

module.exports = { bySort, fromCategory, fromSubCategory, fromTag };