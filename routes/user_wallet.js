var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.post("/", controller.user_wallet.getUserWallet);

module.exports = router;
