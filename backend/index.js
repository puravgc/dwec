const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const { mongoUrl } = require("./keys");
const UserModel = require("./models/model");
const ProjectModel = require("./models/project");
const ArticleModel = require("./models/article");
const GalleryModel = require("./models/gallery");

app.use(cors());
app.use(express.json());

app.use(require("./routes/auth"));
app.use(require("./routes/adminaccess"));

mongoose.connect(mongoUrl);
mongoose.connection.on("connected", () => {
  console.log("successfully connected to the db");
});
mongoose.connection.on("error", () => {
  console.log("error connecting to the db");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
