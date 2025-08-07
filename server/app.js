const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const session = require('express-session')
const passport=require('passport')
const LocalStrategy=require('passport-local')
const User=require('./models/user.js')
const transportRouter=require("./routes/transport.js")
const userRouter=require("./routes/user.js")
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173',  // if using React on port 5173 (or change accordingly)
  credentials: true      
}));
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/project')
  .then(() => console.log('Connected to DB!'));


const sessionOption={
 secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
   cookie:{
        expires:Date.now()+ 7*24*60*60*1000, //1 week
        maxAge: 7*24*60*60*1000,
        httpOnly:true,
    },
}

app.use(session(sessionOption))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/demouser',async(req,res)=>{
  let fakeuser=new User({
    email:'arsalan@gmail.com',
    username:'arsalan'
  })
  let registeredUser=await User.register(fakeuser,'helloworld')
  console.log(registeredUser)
})



app.use("/",transportRouter) //send to routes 
app.use("/",userRouter) //send to routes 

app.use((err,req,res,next)=>{
   let{statusCode=500, message="Something went wrong"}=err
   console.log(err)
//  res.status(statusCode).render("error.ejs",{statusCode,message})
 res.status(statusCode).json({message});
})



app.listen(port, () => {
  console.log(`Server running on ${port}`);
});