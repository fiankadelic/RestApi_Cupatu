var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.usr_order.getAll);

module.exports = router;
