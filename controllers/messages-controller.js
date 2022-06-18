const {getAllMessages} = require('../utils/messages-utils')

const getMessages = (req, res) =>{
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

module.exports = {getMessages}