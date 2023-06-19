var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const usr_wallet = koneksi.define(
  "USR_WALLET",
  {
    ID_WALLLET: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_USER: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    CASH: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    COIN: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = usr_wallet;
