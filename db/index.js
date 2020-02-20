const dbConf = require("config").get("mongoDB")
const mongoose = require("mongoose")

const dbUrl = (process.env.ENVIRONMENT == "test") ? dbConf.test_url : process.env.MONGODB_URI || dbConf.url 

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.Promise = global.Promise;

module.exports = {
    Student: require("../models/student"),
    Address: require("../models/address")
}