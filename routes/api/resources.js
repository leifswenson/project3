const router = require("express").Router();
const resourcesController = require("../../controllers/resourcesController");

// Matches with "/api/resources"
router
  .route("/resources")
  .get(resourcesController.findAll)
  .post(resourcesController.create);

// Matches with "/api/resources/:id"
router
  .route("/resources/:id")
  .get(resourcesController.findById)
  .put(resourcesController.update)
  .delete(resourcesController.remove);
  
// Matches with "api/resources/new"
router
  .route("/resources/new")
  .post(resourcesController.create);

module.exports = router;
