// request-> routes -> controller -> model
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {router} from "./routes/messages-routes.js"

const PORT = 3001
const dbConn = "mongodb://localhost/jitter_mongo_db"
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

app.listen(PORT, ()=> {console.log(`Server running on port ${PORT}...`)})