const model = require("../models/index");
const controller = {};

controller.getTestiAll = async function (req, res) {
  try {
    let getTesti = await model.testi.findAll({
      order: [["id_testi", "DESC"]],
      limit: 10,
    });
    if (getTesti.length > 0) {
      res.json(getTesti);
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
