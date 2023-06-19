const model = require("../models/index");
var md5 = require("md5");
const controller = {};
const { Op, json } = require("sequelize");

controller.getAll = async function (req, res) {
  email = req.body.email_POST;
  password = md5(req.body.password_POST);
  try {
    let user_login = await model.usr_login.findAll({
      include: [{ model: model.usr_list }],
      where: {
        [Op.and]: [
          { EMAIL: email },
          { PASSWORD: password },
          { ID_CATAGORY: "1" },
        ],
        // [Op.or]: [
        //     { email_user: email },
        //     { password_login: password },
        //   { level_login: "USR" },
        // ],
      },
    });
    if (user_login.length > 0) {
      // res.status(200).json({
      //   message: "Get User Login",
      //   data: user_login,
      // });
      res.json(user_login);
    } else {
      res.status(200).json({
        message: " Tidak ada data",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
module.exports = controller;
