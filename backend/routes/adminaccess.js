const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Project = mongoose.model("Project");
const Article = mongoose.model("Article");
const Gallery = mongoose.model("Gallery");

router.get("/getproject", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error retrieving projects:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/deleteproject/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res
      .status(200)
      .json({ message: "Project deleted successfully", deletedProject });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/createproject", async (req, res) => {
  try {
    const { title, description, photos } = req.body;
    const newProject = new Project({
      title,
      description,
      photos,
    });
    await newProject.save();

    res
      .status(201)
      .json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/deletearticle/:id", async (req, res) => {
  try {
    const articleId = req.params.id;
    const deletedArticle = await Article.findByIdAndDelete(articleId);

    if (!deletedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }
    res
      .status(200)
      .json({ message: "Article deleted successfully", deletedArticle });
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/getarticle", async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    console.error("Error retrieving articles:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/createarticle", async (req, res) => {
  try {
    const { title, photos } = req.body;
    const newArticle = new Article({
      title,
      photos,
    });
    await newArticle.save();

    res
      .status(201)
      .json({ message: "Article created successfully", article: newArticle });
  } catch (error) {
    console.error("Error creating Article:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/getgallery", async (req, res) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).json(galleries);
  } catch (error) {
    console.error("Error retrieving gallery:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/creategallery", async (req, res) => {
  try {
    const { title, photo } = req.body;
    const newGallery = new Gallery({
      title,
      photo,
    });
    await newGallery.save();

    res
      .status(201)
      .json({ message: "Gallery created successfully", gallery: newGallery });
  } catch (error) {
    console.error("Error creating Gallery:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/deletegallery/:id", async (req, res) => {
  try {
    const galleryId = req.params.id;
    const deletedGallery = await Gallery.findByIdAndDelete(galleryId);

    if (!deletedGallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    res
      .status(200)
      .json({ message: "Gallery deleted successfully", deletedGallery });
  } catch (error) {
    console.error("Error deleting gallery:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
