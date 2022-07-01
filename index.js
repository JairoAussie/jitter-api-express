// request-> routes -> controller -> model
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {router} from "./routes/messages-routes.js"
import { authRouter } from "./routes/auth-routes.js"
import jwt from "jsonwebtoken"

const PORT = process.env.PORT || 3001
const dbConn = process.env.MONGODB_URL || "mongodb://localhost/jitter_mongo_db"
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

app.use((req, res, next) =>{
    if(req.headers && req.headers.authorization) {
        //console.log("authorization:", req.headers.authorization.split(" ")[1])
        jwt.verify(req.headers.authorization.split(" ")[1], process.env.SECRET_KEY, (err, user) => {
            if (err) {
                req.user = undefined
            } else {
                console.log("decode", user)
                req.user = user
            }
            next()
        })

        
    }else{
        req.user = undefined
        next()
    }
})

app.use("/auth", authRouter)
app.use("/",router)


app.listen(PORT, ()=> {console.log(`Server running on port ${PORT}...`)})