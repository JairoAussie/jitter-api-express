import { getMessages, getMessage, createMessage, removeMessage, updateMessage } from "../controllers/messages-controller.js"
import express from "express" 
import { loginRequired } from "../controllers/auth-controller.js"
export const router = express.Router()

router.get("/messages", getMessages)

router.get("/messages/:id", getMessage)

router.use(loginRequired)

router.post("/messages", createMessage)

//router.use(checkownership)

router.delete("/messages/:id", removeMessage)

router.put("/messages/:id", updateMessage)