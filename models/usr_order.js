var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const usr_order_detail = require("./usr_order_detail");
const usr_order = koneksi.define(
  "USR_ORDER",
  {
    ID_ORDER: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    ID_WORKSHOP: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ID_DROPSITE: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ID_USER: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    DATE_ORDER: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    DATE_PROCESS: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    DATE_FINISH: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    DATE_PAYMENT: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    HANDPHONE: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    SUBTOTAL: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    SHIPPING_COST: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    CASH: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    COIN: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    TOTAL: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    PAYMENT: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    STATUS: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    POSTING: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
usr_order.hasMany(usr_order_detail, { foreignKey: "ID_ORDER" });
usr_order.belongsTo(usr_order_detail, { foreignKey: "ID_ORDER" });
module.exports = usr_order;
