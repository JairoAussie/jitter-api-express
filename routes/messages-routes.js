import { getMessages, getMessage, createMessage, removeMessage, updateMessage } from "../controllers/messages-controller.js"
import express from "express" 
export const router = express.Router()

router.get("/messages", getMessages)

router.get("/messages/:id", getMessage)

router.post("/messages", createMessage)

router.delete("/messages/:id", removeMessage)

router.put("/messages/:id", updateMessage)