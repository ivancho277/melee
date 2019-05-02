//requires express router
const router = require("express").Router();
//pulls in our API bookcontroller and sets our CRUD routes
const userController = require("../controllers/userController");
//consults our home route gets our books from mongo and the .post route posts them to the page
router.route("/api/users")
  .get(userController.findAll)
  .post(userController.create);
//this grabs our ID paramerter of our route and gets a book by ID and then .get finds a book by ID and .put updates a book by id .delete removes a book by ID.
router
  .route("api/users/:user")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
//exports our defined routes to our router
module.exports = router;