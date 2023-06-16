var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const order_dt = require("./order_dt");
const order_ht = koneksi.define(
  "order_ht",
  {
    noorder: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    id_workshop: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_dropsite: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    no_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tanggal_order: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    tanggal_proses: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    tanggal_selesai: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    tanggal_pembayaran: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    nohandphone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subtotal: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ongkir: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cash: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    koin: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pembayaran: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    posting: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
order_ht.hasMany(order_dt, { foreignKey: "noorder" });
// order_ht.belongsTo(order_dt, { foreignKey: "noorder" });
module.exports = order_ht;
