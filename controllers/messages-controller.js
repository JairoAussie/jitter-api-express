import {getAllMessages, getMessageById, addMessage, deleteMessage, changeMessage} from '../utils/messages-utils.js'

export const getMessages = (req, res) =>{
    getAllMessages().exec((err,messages)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        }else{
          res.status(200)  
          res.send(messages)
        }
    })
}

export const getMessage = (req, res) =>{
    getMessageById(req.params.id).exec((err,message)=>{
        if (err){
            res.status(404)
            return res.json({error: "Message not found, wrong id"})
        }else{
          res.status(200)  
          res.send(message)
        }
    })
}

export const createMessage = (req, res) => {
    addMessage(req).save((err, message) => {
        if (err){
            res.status(500)
            return res.json({error: err.message})
        }else{
          res.status(201)  
          res.send(message)
        }
    })
}

export const removeMessage = (req, res) => {
    deleteMessage(req.params.id).exec((err)=>{
        if (err){
            res.status(404)
            return res.json({error: "Message not found, wrong id"})
        } else{
            res.status(200)
            return res.json ({sucess: "Message deleted correctly"})
        }
    })
}

export const updateMessage = (req, res) => {
    changeMessage(req.params.id, req.body).exec((err, message) =>{
        if (err){
            res.status(500)
            return res.json({error: err.messa})
        }else {
            res.status(200)  
          res.send(message)
        }
    })
}
