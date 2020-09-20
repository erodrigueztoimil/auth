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

  app.post("/api/user", (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user) {
          if (req.body.password === user.password) {
            res.status(200).json(user);
          } else {
            res.status(401).json(req.body);
          }
        } else {
          if (req.body.name) {
            User.create(req.body)
              .then((newUser) => res.status(201).json(newUser))
              .catch((err) => res.status(400).json(err));
          } else {
            res.status(404).send("user not found");
          }
        }
      })
      .catch((err) => res.status(400).json(err));
  });

  // User.findOne({ email: req.body.email })
  //   .then((response) => {
  //     if (!response.data) {
  //       if (req.body.name) {
  //         User.create(req.body)
  //           .then((regData) => res.status(200).json(regData))
  //           .catch((regErr) => res.status(400).json(regErr));
  //       } else {
  //         res.status(404).json(response.data);
  //       }
  //     } else if (response.data) {
  //       User.findOne({ email: req.body.email })
  //         .then((loginData) => res.status(302).json(loginData))
  //         .catch((loginErr) => res.status(404).json(loginErr));
  //     }
  //   })
  //   .catch((err) => res.status(400).json(err));

  // // get user by email (login)
  // app.post("/api/user", (req, res) => {
  //   User.findOne({ email: req.params.email })
  //     .then((data) => res.status(200).json(data))
  //     .catch((err) => res.status(400).json(err));
  // });

  // // create user (register)
  // app.post("/api/user", (req, res) => {
  //   User.create(req.body)
  //     .then((data) => res.status(201).json(data))
  //     .catch((err) => res.status(400).json(err));
  // });
};
