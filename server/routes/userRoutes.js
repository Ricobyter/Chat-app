const {register} = require("../controller/usersController")

const router = require("express").Router();

router.post("/register", register)

module.exports = router;