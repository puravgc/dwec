const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;
