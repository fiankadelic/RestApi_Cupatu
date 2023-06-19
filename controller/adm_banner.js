const { DATE } = require("sequelize");
const model = require("../models/index");
const controller = {};
const { Op } = require("sequelize");

controller.getAll = async function (req, res) {
  today = new Date();
  try {
    let getAll = await model.adm_banner.findAll({
      where: {
        [Op.and]: [
          { START_DATE: { [Op.lte]: today } },
          { FINISH_DATE: { [Op.gte]: today } },
          { STATUS: "1" },
        ],
      },
      order: [["ID_BANNER", "ASC"]],
    });

    if (getAll.length > 0) {
      res.json(getAll);
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
