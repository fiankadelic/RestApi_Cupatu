var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.post("/", controller.register.getDevice);

module.exports = router;
