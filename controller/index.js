const user_login = require("./user_login");
const user_wallet = require("./user_wallet");
const banner = require("./banner");
const testi = require("./testi");
const register = require("./register");
const forgot = require("./forgot");
const treatment = require("./treatment");
const controller = {};

controller.treatment = treatment;
controller.forgot = forgot;
controller.register = register;
controller.testi = testi;
controller.banner = banner;
controller.user_login = user_login;
controller.user_wallet = user_wallet;
module.exports = controller;
