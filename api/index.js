//requires path package
const path = require("path");
//requires router .Router() 
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

//brings in both our API routes together
router.use("/books", bookRoutes);

router.use("/google", googleRoutes);

//putting everything together and exporting it
module.exports = router;
