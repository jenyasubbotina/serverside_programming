  'use strict';

const News = require('../models/news_model');

module.exports.create = async (news1) => {
    if (!news1)
        throw new Error('Missing news');

    await News.create(news1);
};


module.exports.getById = async (id) => {
    const n = await News.findById(id);
    return n;
};