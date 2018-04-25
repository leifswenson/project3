const router = require("express").Router();
const resourceRoutes = require("./resources");

// Resource routes
router.use("/resources", resourceRoutes);

module.exports = router;
