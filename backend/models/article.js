const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  photos: [{
    type: String,
    required: true,
  }]
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
