var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.post("/", controller.adm_service.getAll);

module.exports = router;
