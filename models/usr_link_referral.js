var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const usr_link_referral = koneksi.define(
  "USR_LINK_REFERRAL",
  {
    ID_LINK_REFERRAL: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_USER: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    CODE_LINK_REFERRAL: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = usr_link_referral;
