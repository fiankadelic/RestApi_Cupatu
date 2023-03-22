var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const user_device = koneksi.define(
  "user_device",
  {
    id_device: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    no_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    serial_device: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    platform_device: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = user_device;
