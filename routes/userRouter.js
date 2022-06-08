const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/add-user", userController.addUser);
router.put("/update-user/:id/", userController.updateUser);
router.get("/all-users", userController.findAllUsers);
router.delete("/delete-user/:id/", userController.deleteUser);
router.delete("/delete-all-users/", userController.deleteAllUsers);

module.exports = router;
