var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const testi = koneksi.define(
  "testimonial",
  {
    id_testi: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    noorder: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    no_user: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    nama_user: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    keterangan_testi: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    rating_testi: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = testi;
