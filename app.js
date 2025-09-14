__path = process.cwd();

const express = require("express");
const cors = require("cors");
const secure = require("ssl-express-www");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const PORT = process.env.PORT || 8080 || 5000 || 3000;
const { color } = require("./lib/color.js");
const mainrouter = require("./routes/main.js");
const apirouter = require("./routes/api.js");

const app = express();
app.enable("trust proxy");
app.set("json spaces", 2);

// ======== Tambahan untuk EJS =========
app.set("view engine", "ejs");
// folder "views" sudah default, tapi bisa eksplisit:
app.set("views", path.join(__dirname, "views"));

// aktifkan layout
// app.use(expressLayouts);
// app.set("layout", "layouts/main"); // layouts/main.ejs akan jadi template utama
// =====================================

app.use(cors());
app.use(secure);
app.use(express.static("public"));

// Router
app.use("/", mainrouter);
app.use("/api", apirouter);

// 404 Page menggunakan EJS
app.use(function (req, res, next) {
  res.status(404).render("404", { title: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(color(`Server running on port ${PORT}`, "green"));
});

module.exports = app;
