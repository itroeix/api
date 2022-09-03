const mongoose = require("mongoose")
const appsSchema = new mongoose.Schema({
    "category": String,
    "name": String,
    "lower": String,
    "webUrl": String,
    "imageUrl": String,
    "shared": String
})

const Apps = new mongoose.model('apps', appsSchema);
module.exports = Apps