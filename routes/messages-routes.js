const { getMessages, getMessage, createMessage, removeMessage, updateMessage } = require ("../controllers/messages-controller");
const express = require("express")
const router = express.Router()

router.get("/messages", getMessages)

router.get("/messages/:id", getMessage)

router.post("/messages", createMessage)

router.delete("/messages/:id", removeMessage)

router.put("/messages/:id", updateMessage)



module.exports = router
