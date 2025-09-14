const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index", { title: "Beranda" }));
router.get("/artikel", (req, res) =>
  res.render("artikel", { title: "Artikel" })
);
router.get("/blog/:slug", (req, res) =>
  res.render("blog-single", { title: req.params.slug })
);
router.get("/glosarium", (req, res) =>
  res.render("glosarium", { title: "Glosarium" })
);
router.get("/laporkanhoax", (req, res) =>
  res.render("laporkanhoax", { title: "Laporkan Hoax" })
);
router.get("/team", (req, res) => res.render("team", { title: "Tim" }));
router.get("/tes", (req, res) => res.render("tes", { title: "Tes" }));
router.get("/video", (req, res) => res.render("video", { title: "Video" }));

module.exports = router;
