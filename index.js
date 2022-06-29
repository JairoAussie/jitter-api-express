// request-> routes -> controller -> model
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {router} from "./routes/messages-routes.js"
import { authRouter } from "./routes/auth-routes.js"

const PORT = 3001
const dbConn = "mongodb+srv://jairo:123456abc@cluster0.rmxw6vg.mongodb.net/?retryWrites=true&w=majority"
const app = express()

mongoose.connect(dbConn,
    {},
    err => {
        if (err){
            console.log(e, "Database error")
        } else {
            console.log("Connected to the database")
        }
    }
    )

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.use("/",router)
app.use("/auth",authRouter)

app.listen(PORT, ()=> {console.log(`Server running on port ${PORT}...`)})