const mongoose = require("mongoose")
const Schema = mongoose.Schema
//const normalize = require('normalize-mongoose')

const Message = new Schema({
    text: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    posted: {
        type: Date,
        required: true
    },
})
//Message.plugin(normalize)

module.exports =  mongoose.model("Message", Message)