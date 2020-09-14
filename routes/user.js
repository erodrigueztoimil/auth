const User = require("../models/user.model");

module.exports = (app) => {
  // get all users
  app.get("/api/user", (req, res) => {
    User.find({})
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json(err));
  });

  // get user by id
  app.get("/api/user/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json(err));
  });

  // create user (register)
  app.post("/api/user", (req, res) => {
    User.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(400).json(err));
  });
};
