var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const user = koneksi.define(
  "user",
  {
    no_user: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nama_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    notlp_user: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    alamat_user: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    instagram_user: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    kode_referral: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    img_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = user;
