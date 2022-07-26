const
    fetch = require('node-fetch'),
    misc = require('../../misc/misc.json');

function fromTag(id, options)
{
    misc.params.forEach(x => x === 'auth' ? null : this.baseURL.searchParams.delete(x));

    this.baseURL.searchParams.set('method', 'tag');
    this.baseURL.searchParams.set('info_level', 3);
    this.baseURL.searchParams.set('id', id);

    if (options?.sort !== undefined) { this.baseURL.searchParams.set('sort', options.sort); }
    if (options?.page !== undefined) { this.baseURL.searchParams.set('page', options.page); }
    if (options?.width !== undefined) { this.baseURL.searchParams.set('width', options.width); }
    if (options?.height !== undefined) { this.baseURL.searchParams.set('height', options.height); }
    if (options?.operator !== undefined) { this.baseURL.searchParams.set('operator', options.operator); }

    return new Promise((resolve) =>
    {
        fetch.default(this.baseURL).then(x => x.json()).then((response) =>
        {
            if (response.success === false) { return require('../../misc/errorHandler')(response); }

            let
                data = [],
                temp = {};

            response.wallpapers.forEach((item) =>
            {
                temp.id = item.id;
                temp.width = item.width;
                temp.height = item.height;
                temp.fileType = item.file_type;
                temp.fileSize = item.file_size;
                temp.url = { image: item.url_image, thumbnail: item.url_thumb, webpage: item.url_page };

                if (options?.level === 2)
                {
                    temp.category = { name: item.category, id: item.category_id };
                    temp.subCategory = { name: item.sub_category, id: item.sub_category_id };
                    temp.user = { name: item.user_name, id: item.user_id };
                }

                if (options?.level === 3)
                {
                    temp.category = { name: item.category, id: item.category_id };
                    temp.subCategory = { name: item.sub_category, id: item.sub_category_id };
                    temp.user = { name: item.user_name, id: item.user_id };
                    
                    temp.collection = { name: item.collection , id: item.collection_id };
                    temp.group = { name: item.group , id: item.group_id };
                }

                data.push(temp);

                temp = {};
            });

            resolve(data);
        });
    });
};

module.exports = fromTag;