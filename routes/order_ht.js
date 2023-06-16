var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.order_ht.getAll);

module.exports = router;
