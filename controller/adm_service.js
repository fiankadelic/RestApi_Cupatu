const model = require("../models/index");
const controller = {};
const { Op } = require("sequelize");
// const { user_wallet } = require(".");

controller.getAll = async function (req, res) {
  itemRespone = req.body.item_POST;
  try {
    let item = await model.adm_service.findAll({
      where: {
        CATEGORY: {
          [Op.eq]: itemRespone,
        },
      },
    });
    if (item.length > 0) {
      console.log(item);
      res.json(item);
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
