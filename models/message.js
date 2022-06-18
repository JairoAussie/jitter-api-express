const mongoose = require("mongoose")
const Schema = mongoose.Schema

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

module.exports =  mongoose.model("Message", Message)