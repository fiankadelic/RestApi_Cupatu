const model = require("../models/index");
const controller = {};

controller.getAll = async function (req, res) {
  try {
    let getOrder_ht = await model.order_ht.findAll({
      include: [{ model: model.order_dt }],
      order: [["noorder", "DESC"]],
    });
    if (getOrder_ht.length > 0) {
      res.json(getOrder_ht);
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
