//requires express router
const router = require("express").Router();
//pulls in our API bookcontroller and sets our CRUD routes
const playerController = require("../controllers/playerController");
//consults our home route gets our books from mongo and the .post route posts them to the page
router.route("/api/players")
  .get(playerController.findAll)
  .post(playerController.create);
//this grabs our ID paramerter of our route and gets a book by ID and then .get finds a book by ID and .put updates a book by id .delete removes a book by ID.
router
  .route("api/players/:player")
  .get(playerController.findById)
  .put(playerController.update)
  .delete(playerController.remove);
//exports our defined routes to our router
module.exports = router;