const User = require("../models/user.model");

module.exports = (app) => {
  // get all users
  app.get("/api/user", (req, res) => {
    User.find({})
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json(err));
  });
};
