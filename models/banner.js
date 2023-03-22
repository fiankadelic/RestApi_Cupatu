var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const banner = koneksi.define(
  "banner",
  {
    id_dropsite: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_banner: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.STRING,
      allowNull: false,
    },
    judul_banner: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gambar_banner: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    start_date_banner: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    finish_date_banner: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    status_banner: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    link_banner: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = banner;
