var express = require("express");
var router = express.Router();
const controller = require("../controller/index");

router.post("/", controller.forgot.getEmail);
router.put("/:email", controller.forgot.setPassword);

module.exports = router;
