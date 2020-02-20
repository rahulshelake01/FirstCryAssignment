const mongoose = require("mongoose")
const Schema = mongoose.Schema

const address = new Schema({
    state: {type: String, require: true},
    district : {type: String, require: true},
    pin: {type: Number, require: true},
    landmark: {type: String},
    housename: {type: String},
    housenumber: {type: String}
})

module.exports = mongoose.model("Address", address)