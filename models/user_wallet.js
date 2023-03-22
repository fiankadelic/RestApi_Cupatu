var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const user_wallet = koneksi.define(
  "user_wallet",
  {
    id_wallet: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    no_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cash_wallet: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    koin_wallet: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = user_wallet;
