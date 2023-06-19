var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.adm_banner.getAll);

module.exports = router;
