import mongoose from "mongoose"


export const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        unique: true
    },
    username: {
        type: String,
        required: true, 
        unique: true
    },
    hash_password: {
        type: String,
        required: true
    },
})

export const User =  mongoose.model("User", userSchema)