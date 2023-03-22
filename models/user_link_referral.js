var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const user_link_referral = koneksi.define(
  "user_link_referral",
  {
    id_link: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    no_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    kode_link_referall: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = user_link_referral;
