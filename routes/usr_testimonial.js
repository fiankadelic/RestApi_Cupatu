var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.usr_testimonial.getAll);

module.exports = router;
