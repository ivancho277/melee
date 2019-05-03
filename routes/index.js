// Assigning our required modules, not that the apiRoutes is not pulling in a typical node module, but is defining the API paths in the URL path

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
