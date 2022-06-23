// request-> routes -> controller -> model
const express = require( "express")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./routes/messages-routes")

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