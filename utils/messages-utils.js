import {Message} from '../models/message.js'

// const getAllMessages = ()=> {
//     return Message.find()
// }

export const getAllMessages = ()=> Message.find()

export const getMessageById = (id) => Message.findById(id)

export const addMessage = (req) =>{
    let date = Date.now()
    req.body.posted = date
    req.body.username = req.user.username
    return Message(req.body)
}

export const deleteMessage = (id) => Message.findByIdAndRemove(id)

export const changeMessage = (id, body) => {
    let date = Date.now()
    body.posted = date
    return Message.findByIdAndUpdate(id, body, {new : true})

}


