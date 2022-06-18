const { getMessages } = require ("../controllers/messages-controller");
const express = require("express")
const router = express.Router()

router.get("/messages", getMessages)

module.exports = router
