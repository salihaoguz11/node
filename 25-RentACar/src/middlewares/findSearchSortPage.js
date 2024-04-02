"use strict"

module.exports = (req, res, next) => {

    /* FILTERING & SEARCHING & SORTING & PAGINATION */

    // ### FILTERING ###

    // URL?filter[key1]=value1&filter[key2]=value2
    const filter = req.query?.filter || {}
    // console.log(filter)

    // ### SEARCHING ###

    // URL?search[key1]=value1&search[key2]=value2
    // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
    const search = req.query?.search || {}
    // console.log(search)
    // const example = { title: { $regex: 'test', $options: 'i' } } // const example = { title: /test/ }
    for (let key in search) search[key] = { $regex: search[key], $options: 'i' } // i: case insensitive
    // console.log(search)

    // ### SORTING ###

    // URL?sort[key1]=asc&sort[key2]=desc
    // asc: A-Z - desc: Z-A
    const sort = req.query?.sort || {}
    // console.log(sort)

    // ### PAGINATION ###

    // URL?page=3&limit=10
    let limit = Number(req.query?.limit)
    // console.log(limit)
    limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20)
    // console.log(typeof limit, limit)

    let page = Number(req.query?.page)
    page = page > 0 ? (page - 1) : 0 // Backend'de sayfa sayısı her zaman (page - 1)'dir.
    // console.log(typeof page, page)

    let skip = Number(req.query?.skip)
    skip = skip > 0 ? skip : (page * limit)
    // console.log(typeof skip, skip)

    /* FILTERING & SEARCHING & SORTING & PAGINATION */

    // Run for output:
    res.getModelList = async (Model, customFilter = {}, populate = null) => {
        return await Model.find({ ...filter, ...search, ...customFilter }).sort(sort).skip(skip).limit(limit).populate(populate)
    }

    // Details:
    res.getModelListDetails = async (Model, customFilter = {}) => {

        const data = await Model.find({ ...filter, ...search, ...customFilter })

        let details = {
            filter,
            search,
            sort,
            skip,
            limit,
            page,
            pages: {
                previous: (page > 0 ? page : false),
                current: page + 1,
                next: page + 2,
                total: Math.ceil(data.length / limit)
            },
            totalRecords: data.length,
        }
        details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next)
        if (details.totalRecords <= limit) details.pages = false
        return details
    }
    
    next()
}