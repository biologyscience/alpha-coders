const misc = require('../../misc/misc.json');

function ofGroup(id)
{
    misc.params.forEach(x => x === 'auth' ? null : this.baseURL.searchParams.delete(x));

    this.baseURL.searchParams.set('method', 'group_list');
    this.baseURL.searchParams.set('id', id)

    return new Promise((resolve) =>
    {
        fetch(this.baseURL).then(x => x.json()).then((response) =>
        {
            if (response.success === false) { return require('../../misc/errorHandler')(response); }

            resolve(response.groups);
        });
    });
};

module.exports = ofGroup;