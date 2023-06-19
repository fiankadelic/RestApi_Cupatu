const model = require("../models/index");
const controller = {};

controller.getAll = async function (req, res) {
  try {
    let getAll = await model.usr_order.findAll({
      include: [{ model: model.usr_order_detail, include:[{model: model.adm_service, attributes:["NAME"]}] }],
      // include: [{ model: model.service }],
      order: [["ID_ORDER", "DESC"]],
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
