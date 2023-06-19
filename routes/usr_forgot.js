var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.post("/", controller.usr_forgot.getEmail);
router.put("/:email", controller.usr_forgot.setPassword);

module.exports = router;
