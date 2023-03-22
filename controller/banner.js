const { DATE } = require("sequelize");
const model = require("../models/index");
const controller = {};
const { Op } = require("sequelize");

controller.getAll = async function (req, res) {
  today = new Date();
  try {
    let getBanner = await model.banner.findAll({
      where: {
        [Op.and]: [
          { start_date_banner: { [Op.lte]: today } },
          { finish_date_banner: { [Op.gte]: today } },
          { status_banner: "1" },
        ],
      },
      order: [["id_banner", "ASC"]],
    });

    if (getBanner.length > 0) {
      // res.status(200).json({
      //   message: "Get User wallet",
      //   data: user_wallet,
      // });
      res.json(getBanner);
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
