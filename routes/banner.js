var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.banner.getAll);

module.exports = router;
