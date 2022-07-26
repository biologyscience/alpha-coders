class Alpha
{
    baseURL = new URL('https://wall.alphacoders.com/api2.0/get.php');

    constructor(apiToken)
    {
        this.apiToken = apiToken;
        this.baseURL.searchParams.set('auth', this.apiToken);
    }

    getWallpapers =
    {
        baseURL: this.baseURL,
        bySort: require('./methods/getWallpapers/bySort'),
        fromCategory: require('./methods/getWallpapers/fromCategory'),
        fromCollection: require('./methods/getWallpapers/fromCollection'),
        fromGroup: require('./methods/getWallpapers/fromGroup'),
        fromSubCategory: require('./methods/getWallpapers/fromSubCategory'),
        fromFeatured: require('./methods/getWallpapers/fromFeatured'),
        fromPopular: require('./methods/getWallpapers/fromPopular'),
        fromTag: require('./methods/getWallpapers/fromTag'),
        fromUser: require('./methods/getWallpapers/fromUser')
    }

    getWallpaperCount =
    {
        baseURL: this.baseURL,
        inEntireDB: require('./methods/getWallpaperCount/inEntireDB'),
        inCategory: require('./methods/getWallpaperCount/inCategory'),
        inCollection: require('./methods/getWallpaperCount/inCollection'),
        inGroup: require('./methods/getWallpaperCount/inGroup'),
        inSubCategory: require('./methods/getWallpaperCount/inSubCategory'),
        inFeatured: require('./methods/getWallpaperCount/inFeatured'),
        inPopular: require('./methods/getWallpaperCount/inPopular'),
        inTag: require('./methods/getWallpaperCount/inTag'),
        inUser: require('./methods/getWallpaperCount/inUser')
    }

    getList =
    {
        baseURL: this.baseURL,
        ofCategory: require('./methods/getList/ofCategory'),
        ofCollection: require('./methods/getList/ofCollection'),
        ofGroup: require('./methods/getList/ofGroup'),
        ofSubCategory: require('./methods/getList/ofSubCategory')
    }

    search = require('./methods/search');
    getWallpaperInfo = require('./methods/getWallpaperInfo');
    getRandom = require('./methods/getRandomWallpaper');
    queryCount = require('./methods/queryCount');
}

module.exports = Alpha;