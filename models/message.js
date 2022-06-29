import mongoose from "mongoose"

import normalize from 'normalize-mongoose'

export const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    posted: {
        type: String,
        required: true
    },
})
messageSchema.plugin(normalize)

export const Message =  mongoose.model("Message", messageSchema)