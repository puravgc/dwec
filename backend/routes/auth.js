const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Jwt_secret } = require("../keys");



router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Please provide all fields" });
  }
  const userData = await USER.findOne({ username: username });
  if (!userData) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  try {
    let isMatch = password == userData.password

    if (isMatch) {
      const token = jwt.sign({ _id: userData.id }, Jwt_secret);
      const { _id, username } = userData;
      return res.status(200).json({
        message: "Successfully signed in",
        token: token,
        user: { _id, username },
      });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

module.exports = router;
