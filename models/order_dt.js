var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const order_dt = koneksi.define(
  "order_dt",
  {
    id_order: {
      type: Sequelize.STRING,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true,
    },
    noorder : {
      type: Sequelize.STRING,
      allowNull: false,
    },
    no_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tanggal: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    no_akun: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nama_service: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    merek: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    harga: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pack: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = order_dt;
