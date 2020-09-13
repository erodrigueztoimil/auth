module.exports = (app) => {
  app.get("/:name", (req, res) => {
    res.send(`hello ${req.params.name}!`);
  });
};

