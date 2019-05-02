//requires express router
const router = require("express").Router();
//pulls in our API bookcontroller and sets our CRUD routes
const armorController = require("../controllers/armorController");
//consults our home route gets our books from mongo and the .post route posts them to the page
router.route("/api/armors")
  .get(armorController.findAll)
  .post(armorController.create);
//this grabs our ID paramerter of our route and gets a book by ID and then .get finds a book by ID and .put updates a book by id .delete removes a book by ID.
router
  .route("api/armors/:armor")
  .get(armorController.findById)
  .put(armorController.update)
  .delete(armorController.remove);
//exports our defined routes to our router
module.exports = router;