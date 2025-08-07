
const User=require('../models/user.js')
const passport = require("passport")


module.exports.signup=async (req, res, next) => {
  let { username, email, password } = req.body;
  const newUser = new User({ email, username });
  const registeredUser = await User.register(newUser, password);
  console.log(registeredUser);

  req.logIn(registeredUser, (err) => {
    if (err) return next(err);
    return res.json({ 
      message: "Signup and login successful", 
      user: registeredUser 
    });
  });
}

module.exports.login = function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    req.logIn(user, function (err) {
      if (err) return next(err);
      return res.json({ message: "Login successful", user });
    });
  })(req, res, next);
};

module.exports.logout=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
           return next(err)
        }
        return res.json({message: "Logout successful"})
    })
}

module.exports.checkAuth=(req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
}

module.exports.addLocation=async (req, res) => {
  const { pickup, dropoff, transport } = req.body;
  const user = await User.findById(req.user._id);

  // Check duplicates including transport
  const alreadyExists = user.favorites.some(fav =>
    fav.pickup.name === pickup.name &&
    fav.dropoff.name === dropoff.name &&
    fav.transport?.toString() === transport
  );

  if (alreadyExists) {
    return res.status(409).json({ message: "Location is already added to favorites" });
  }

  user.favorites.push({ pickup, dropoff, transport });
  await user.save();

  res.status(201).json({
    message: "Favorite location added successfully",
    favorites: user.favorites
  });
}

module.exports.getFavorites=async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate('favorites.transport');
    console.log(user.favorites)
  res.json(user.favorites); // Only send favorites array
}

module.exports.deleteFavorites=async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndUpdate(req.user._id, {
    $pull: { favorites: { _id: id } } // remove matching favorite
  });

  res.json({ message: "Favorite deleted successfully" });
}