var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.testi.getTestiAll);

module.exports = router;
