const Message = require('../models/message')

// const getAllMessages = ()=> {
//     return Message.find()
// }

const getAllMessages = ()=> Message.find()

const getMessageById = (id) => Message.findById(id)

const addMessage = (body) =>{
    let date = Date.now()
    body.posted = date
    return Message(body)
}

const deleteMessage = (id) => Message.findByIdAndRemove(id)

const changeMessage = (id, body) => {
    let date = Date.now()
    body.posted = date
    return Message.findByIdAndUpdate(id, body, {new : true})

}


module.exports = {getAllMessages, getMessageById, addMessage, deleteMessage, changeMessage}