var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const service = koneksi.define(
  "item_service",
  {
    id_item_service: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    no_akun: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    kel_item_service: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nama_item_service: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    desk_item_service: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    durasi_item_service: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    harga_item_service: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = service;
