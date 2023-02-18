const misc = require('../../misc/misc.json');

function getWallpaperInfo(id)
{
    misc.params.forEach(x => x === 'auth' ? null : this.baseURL.searchParams.delete(x));

    this.baseURL.searchParams.set('method', 'wallpaper_info');
    this.baseURL.searchParams.set('id', id);

    return new Promise((resolve) =>
    {
        fetch(this.baseURL).then(x => x.json()).then((response) =>
        {
            if (response.success === false) { return require('../misc/errorHandler')(response); }
            
            let data = { wallpaper: {}, tags: [] };

            data.wallpaper.id = response.wallpaper.id;
            data.wallpaper.name = response.wallpaper.name;
            data.wallpaper.featured = response.wallpaper.featured;
            data.wallpaper.width = response.wallpaper.width;
            data.wallpaper.height = response.wallpaper.height;
            data.wallpaper.fileType = response.wallpaper.file_type;
            data.wallpaper.fileSize = response.wallpaper.file_size;
            data.wallpaper.url = { image: response.wallpaper.url_image, thumbnail: response.wallpaper.url_thumb, webpage: response.wallpaper.url_page };
            data.wallpaper.category = { name: response.wallpaper.category, id: response.wallpaper.category_id };
            data.wallpaper.subCategory = { name: response.wallpaper.sub_category, id: response.wallpaper.sub_category_id };
            data.wallpaper.user = { name: response.wallpaper.user_name, id: response.wallpaper.user_id };
            data.wallpaper.collection = { name: response.wallpaper.collection , id: response.wallpaper.collection_id };
            data.wallpaper.group = { name: response.wallpaper.group , id: response.wallpaper.group_id };

            data.tags = response.tags;

            resolve(data);
        });
    });
};

module.exports = getWallpaperInfo;