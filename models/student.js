const mongoose = require("mongoose")
const Schema = mongoose.Schema

const student = new Schema({
    roll_no: {type: String, require: true},
    fname : {type: String, require: true},
    lname: {type: String, require: true},
    class: {type: Number, required: true},
    address: {type: Schema.Types.ObjectId, ref: "Address"},
    parent_contact_no: {type: Number, required: false}
})

module.exports = mongoose.model("Students", student)