const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:String,
    entry:String
})

module.exports = mongoose.model('Blogs',blogSchema)