const router = require("express").Router();
const resourceRoutes = require("./resources");
const userRoutes = require("./users");

// Resource routes
router.use("/resources", resourceRoutes);
router.use("/users", userRoutes);

module.exports = router;
