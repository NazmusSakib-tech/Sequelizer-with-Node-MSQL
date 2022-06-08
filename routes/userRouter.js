const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/add-user", userController.addUser);

module.exports = router;
