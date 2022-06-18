const Message = require('../models/message')

// const getAllMessages = ()=> {
//     return Message.find()
// }

const getAllMessages = ()=> Message.find()


module.exports = {getAllMessages}