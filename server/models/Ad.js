const mongoose = require("mongoose")
const adSchema = mongoose.Schema({
    name: String,
    audiance: String,
    value: String,
    action: String,
    ad: String,
    keywords: String,
    language: String,
    creator: String,

})

var Ad = mongoose.model('ad', adSchema);

module.exports = Ad