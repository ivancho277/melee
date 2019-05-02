//requires express router
const router = require("express").Router();
//pulls in our API bookcontroller and sets our CRUD routes
const thrallController = require("../controllers/thrallController");
//consults our home route gets our books from mongo and the .post route posts them to the page
router.route("/api/thralls")
  .get(thrallController.findAll)
  .post(thrallController.create);
//this grabs our ID paramerter of our route and gets a book by ID and then .get finds a book by ID and .put updates a book by id .delete removes a book by ID.
router
  .route("api/thralls/:thrall")
  .get(thrallController.findById)
  .put(thrallController.update)
  .delete(thrallController.remove);
//exports our defined routes to our router
module.exports = router;