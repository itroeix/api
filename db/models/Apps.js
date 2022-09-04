const mongoose = require("mongoose")
const appsSchema = new mongoose.Schema({
    "category": { type: String, enum: ['ide', 'apis', 'video', 'text', 'design', 'vm'] , required: true },
    "name": { type: String, required: true },
    "lower": { type: String, required: true },
    "webUrl": { type: String, required: true },
    "shared": { type: String, required: true }
})

const Apps = new mongoose.model('apps', appsSchema);
module.exports = Apps