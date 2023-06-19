var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const adm_service = koneksi.define(
  "ADM_SERVICE",
  {
    ID_SERVICE: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    NO_COA: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    CATEGORY: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    NAME: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    DESCRIPTION: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    TIME_DURATION: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    PRICE: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = adm_service;
