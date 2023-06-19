var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.post("/", controller.usr_wallet.getAll);

module.exports = router;
