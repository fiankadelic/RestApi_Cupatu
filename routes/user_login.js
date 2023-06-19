var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.post("/", controller.usr_login.getAll);

module.exports = router;
