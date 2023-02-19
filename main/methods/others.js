const process = require('../utils');

function search(term, options)
{
    const url = process.getBaseURL();

    url.searchParams.set('method', 'search');

    if (term === undefined) throw new Error('Search term not provided !');

    url.searchParams.set('term', term);

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

function getWallpaper(id)
{
    const url = process.getBaseURL();

    if (id === undefined) throw new Error('Wallpaper ID not provided !');

    url.searchParams.set('method', 'wallpaper_info');
    url.searchParams.set('id', id);

    return new Promise((resolve) =>
    {
        fetch(url).then(x => x.json()).then((response) =>
        {
            if (process.response(response) === null) return resolve(null);
            
            const data = process.data([response.wallpaper], 'WALLPAPER');

            resolve({ wallpaper: data[0], tags: response.tags });
        });
    });
};

function getRandomWallpaper(type)
{
    const url = process.getBaseURL();

    url.searchParams.set('method', 'random');

    type === undefined ? null : url.searchParams.set('type', type);

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

function queryCount()
{
    const url = process.getBaseURL();

    url.searchParams.set('method', 'query_count');

    return new Promise((resolve) =>
    {
        fetch(url).then(x => x.json()).then((response) =>
        {
            if (process.response(response) === null) return resolve(null);

            const send =
            {
                used: response.count,
                unused: 100000 - response.count,
                percentUsed: `${(response.count / 1000)}%`
            };

            resolve(send);
        });
    });
};



module.exports = { search, getWallpaper, getRandomWallpaper, queryCount };