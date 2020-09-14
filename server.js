const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost/auth", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB connection stablished successfully!"))
  .catch(console.error);

require("./routes/user")(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("==> 🌎 Listening on port ", port);
});
