const model = require("../models/index");
const controller = {};
const { Op } = require("sequelize");
// const { user_wallet } = require(".");

controller.getUserWallet = async function (req, res) {
  no_wallet = req.body.idUserLogin_POST;
  try {
    let user_wallet = await model.user_wallet.findAll({
      where: {
        [Op.and]: [{ no_user: no_wallet }],
      },
    });
    if (user_wallet.length > 0) {
      console.log(user_wallet);
      res.json(user_wallet);
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
