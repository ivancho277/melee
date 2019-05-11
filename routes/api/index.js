//requires path package
const path = require("path");
//requires router .Router()
const router = require("express").Router();
const armorRoute = require("./armor");
const playerRoute = require("./player");
const thrallRoute = require("./thrall");
const userRoute = require("./user");
const weaponsRoute = require("./weapon");

//brings in both our API routes together

router.use("/armors", armorRoute); //<--- api -armors .. etc
router.use("/players", playerRoute);// <--- api -players ..etc
router.use("/thralls", thrallRoute);
router.use("/users", userRoute);
router.use("/weapons", weaponsRoute);

//putting everything together and exporting it
module.exports = router;
