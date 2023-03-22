var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.post("/", controller.treatment.getTreatment);

module.exports = router;
