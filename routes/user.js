const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const pwdHashHandler = (pwd) => {
  return new Promise((response) => {
    bcrypt.hash(pwd, saltRounds).then((hash) => {
      response(hash);
    });
  });
};

const authenticate = (pwd, hash) => {
  return new Promise((response) => {
    bcrypt.compare(pwd, hash).then((result) => {
      response(result);
    });
  });
};

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

  app.post("/api/user", (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user) {
          authenticate(req.body.password, user.password)
            .then((response) => {
              if (response) {
                res.status(200).json(response);
              } else {
                res.status(401).json(response);
              }
            })
            .catch((err) => res.send(400).json(err));
        } else {
          if (req.body.name) {
            pwdHashHandler(req.body.password).then((response) => {
              const userData = {
                name: req.body.name,
                email: req.body.email,
                password: response,
              };

              User.create(userData)
                .then((newUser) => res.status(201).json(newUser))
                .catch((err) => res.status(400).json(err));
            });
          } else {
            res.status(404).send("user not found");
          }
        }
      })
      .catch((err) => res.status(400).json(err));
  });
};
