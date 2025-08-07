// const mongoose = require('mongoose');
// const initData=require("./data.js")
// const Transport=require("../models/transport.js")
// const User=require("../models/user.js")
// mongoose.connect('mongodb://127.0.0.1:27017/project')
//   .then(() => console.log('Connected to DB!'));


// const initDB= async ()=>{
//     await Transport.deleteMany({})
//      await User.deleteMany({})
//     await Transport.insertMany(initData.data)
//     console.log("Data was initialized!")


// }

// initDB();

const mongoose = require('mongoose');
const initData = require("./data.js");
const Transport = require("../models/transport.js");
const User = require("../models/user.js");

mongoose.connect('mongodb://127.0.0.1:27017/project')
  .then(() => {
    console.log('Connected to DB!');
    return initDB(); // Call init after connection
  })
  .catch(err => console.error(err));

const initDB = async () => {
  // Drop the entire DB
  await mongoose.connection.db.dropDatabase();
  console.log("Database dropped!");

  // Insert fresh data
  await Transport.insertMany(initData.data);
  console.log("Transports inserted!");

  // Optional: Add default users here
  // await User.insertMany(defaultUsers);

  mongoose.connection.close();
};
