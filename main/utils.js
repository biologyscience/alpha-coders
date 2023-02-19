let BASEURL;

function setBaseURL(url) { BASEURL = url };

function getBaseURL() { return new URL(BASEURL) };

function params(params)
{
    const dummy = new Map();

    ['type', 'page', 'sort'].forEach((x) =>
    {
        if (params?.[x] !== undefined) dummy.set(x, params[x]);
    });

    if (params?.ratio?.length === 2)
    {
        const min = params.ratio[0];
        const max = params.ratio[1];

        if (min > max) return;

        dummy.set('min_ratio', min);
        dummy.set('max_ratio', max);

        if (params?.type !== 'phone') dummy.set('type', 'phone');
    }

    if (params?.operator !== undefined)
    {
        if (params?.height !== undefined || params?.width !== undefined)
        {
            dummy.set('operator', params.operator);

            params?.height === undefined ? null : dummy.set('height', params.height);
            params?.width === undefined ? null : dummy.set('width', params.width);
        }
    }

    else if (params?.height !== undefined && params?.width !== undefined)
    {
        dummy.set('height', params.height);
        dummy.set('width', params.width);   
    }

    return [...dummy];
};

function response(res)
{
    if (res.success)
    {
        if (res?.wallpapers?.length === 0) return null;
    }

    else
    {
        if (res.error === 'invalid_auth') throw new Error('API Key is invalid !');
        
        if (res.error === 'id_required') return null;

        if (res.error === 'tag_not_found') return null;
    }
};

function data(obj, type)
{
    const send = [];

    if (type === 'LIST')
    {
        obj.forEach((x) =>
        {
            send.push
            ({
                id: x.id,
                name: x.name,

                wallpaperCount:
                {
                    desktop: x.desktop_wallpaper_count,
                    phone: x.phone_wallpaper_count
                }
            });
        });
    }

    if (type === 'WALLPAPER')
    {
        obj.forEach((x) =>
        {
            send.push
            ({
                id: x.id,
                height: x.height,
                width: x.width,

                category:
                {
                    name: x.category,
                    id: x.category_id,

                    sub:
                    {
                        name: x.sub_category,
                        id: x.sub_category_id
                    }
                },

                file:
                {
                    type: x.file_type,
                    size: x.file_size / (1024 * 1000)
                },

                url: 
                {
                    image: x.url_image,
                    thumbnail: x.url_thumb,
                    webpage: x.url_page
                },
                
                user:
                {
                    name: x.user_name,
                    id: x.user_id
                }
            });
        });
    }

    return send;
};

module.exports = { params, response, data, setBaseURL, getBaseURL };