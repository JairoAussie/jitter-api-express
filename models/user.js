import mongoose from "mongoose"

import normalize from 'normalize-mongoose'
import bcrypt from "bcrypt"

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
userSchema.plugin(normalize)

// User.methods.comparePassword = function(password){
//     return bcrypt.compareSync(password, this.hash_password)
// }
userSchema.methods.comparePassword = (password) => {
    console.log(password)
    console.log("this", this)
    console.log("hash", this.hash_password)
    return bcrypt.compareSync(password, this.hash_password)
}

export const User =  mongoose.model("User", userSchema)