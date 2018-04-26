const router = require("express").Router();
const resourcesController = require("../../controllers/resourcesController");

// Matches with "/api/resources"
router
  .route("/")
  .get(resourcesController.findAll)
  .post(resourcesController.create);

// Matches with "/api/resources/:id"
router
  .route("/:id")
  .get(resourcesController.findById)
  .put(resourcesController.update)
  .delete(resourcesController.remove);
  
// Matches with "api/resources/new"
router
  .route("/new")
  .post(resourcesController.create);

module.exports = router;
