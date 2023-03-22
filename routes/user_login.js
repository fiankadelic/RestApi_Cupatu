var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.post("/", controller.user_login.getUserLogin);

module.exports = router;
