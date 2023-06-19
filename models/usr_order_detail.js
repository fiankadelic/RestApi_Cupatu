var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const adm_service = require("./adm_service");
const usr_order_detail = koneksi.define(
  "USR_ORDER_DETAIL",
  {
    ID_ORDER_DETAIL: {
      type: Sequelize.STRING,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true,
    },
    ID_ORDER	 : {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ID_USER: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    DATE: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    NO_COA: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ID_SERVICE: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    BRAND: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    PRICE: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    STATUS: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    PACK: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
usr_order_detail.hasOne(adm_service, { foreignKey: "ID_SERVICE" });
usr_order_detail.belongsTo(adm_service, { foreignKey: "ID_SERVICE" });
module.exports = usr_order_detail;
