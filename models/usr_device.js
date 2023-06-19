var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const usr_device = koneksi.define(
  "USR_DEVICE",
  {
    ID_DEVICE: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_USER: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    SERIAL_NUMBER: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    PLATFORM: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = usr_device;
