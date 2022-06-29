//import { getMessages, getMessage, createMessage, removeMessage, updateMessage } from "../controllers/messages-controller.js"
import { signUp , signIn} from "../controllers/users-controller.js"
import express from "express" 
export const authRouter = express.Router()

authRouter.post("/signup", signUp)

authRouter.post("/signin", signIn)