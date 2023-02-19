const Others = require('./methods/others');

class Alpha
{
    baseURL = new URL('https://api.alphacoders.com/3.0');

    constructor(apiToken)
    {
        if (apiToken === undefined) throw new Error('API Key is not provided !');

        this.baseURL.searchParams.set('auth', apiToken);

        require('./utils').setBaseURL(this.baseURL);
    };

    getSpecificWallpapers = require('./methods/getSpecificWallpapers');
    getList = require('./methods/getList');

    search = Others.search;
    getWallpaper = Others.getWallpaper;
    getRandomWallpapers = Others.getRandomWallpaper;
    queryCount = Others.queryCount;
};

module.exports = Alpha;