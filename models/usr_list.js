var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const usr_list = koneksi.define(
  "USR_LIST",
  {
    ID_USER: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    FULLNAME: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    HANDPHONE: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    ADDRESS: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    INSTAGRAM: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    EMAIL: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    DATE_JOIN: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    CODE_REFERRAL: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    PHOTO: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = usr_list;
