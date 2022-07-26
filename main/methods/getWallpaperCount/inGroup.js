const
    fetch = require('node-fetch'),
    misc = require('../../misc/misc.json');

function inGroup(id, options)
{
    misc.params.forEach(x => x === 'auth' ? null : this.baseURL.searchParams.delete(x));

    this.baseURL.searchParams.set('method', 'group_count');
    this.baseURL.searchParams.set('id', id);

    if (options?.width !== undefined) { this.baseURL.searchParams.set('width', options.width); }
    if (options?.height !== undefined) { this.baseURL.searchParams.set('height', options.height); }
    if (options?.operator !== undefined) { this.baseURL.searchParams.set('operator', options.operator); }

    return new Promise((resolve) =>
    {
        fetch.default(this.baseURL).then(x => x.json()).then((response) =>
        {
            if (response.success === false) { return require('../../misc/errorHandler')(response); }

            resolve(response.count);
        });
    });
};

module.exports = inGroup;