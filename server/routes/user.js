const express = require("express")
const router = express.Router()
const wrapAsync=require("../utils/wrapAsync.js")//for error handling
const userController=require("../controllers/user.js")
const {isLoggedIn}=require("../middleware.js")

router.post("/signup", wrapAsync(userController.signup));



router.post("/login",userController.login );

router.get("/logout",userController.logout)

router.get("/check-auth",userController.checkAuth );


router.post('/addLocation', isLoggedIn, wrapAsync(userController.addLocation));



router.get('/favorites', isLoggedIn, wrapAsync(userController.getFavorites));


router.delete('/favorites/:id', isLoggedIn, wrapAsync(userController.deleteFavorites));



module.exports=router