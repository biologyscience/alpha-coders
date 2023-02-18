const misc = require('../../misc/misc.json');

function queryCount()
{
    misc.params.forEach(x => x === 'auth' ? null : this.baseURL.searchParams.delete(x));

    this.baseURL.searchParams.set('method', 'query_count');

    return new Promise((resolve) =>
    {
        fetch(this.baseURL).then(x => x.json()).then((response) =>
        {
            if (response.success === false) { return require('../misc/errorHandler')(response); }

            let data = { currentMonth: {}, previousMonth: {} };

            data.currentMonth.count = response.counts.month_count;
            data.currentMonth.price = response.counts.month_price;
            data.previousMonth.count = response.counts.last_month_count;
            data.previousMonth.price = response.counts.last_month_price;

            resolve(data);
        });
    });
};

module.exports = queryCount;