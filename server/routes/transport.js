const express = require("express")
const router = express.Router()
const wrapAsync=require("../utils/wrapAsync.js")//for error handling
const {isLoggedIn}=require("../middleware.js")
const transportController=require("../controllers/transport.js")


router.post("/demo",isLoggedIn,wrapAsync (transportController.searchTransport))


module.exports=router
