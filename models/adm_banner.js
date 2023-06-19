var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const adm_banner = koneksi.define(
  "ADM_BANNER",
  {
    ID_BANNER: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ID_DROPSITE: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    NAME: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    IMAGE: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    START_DATE: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    FINISH_DATE: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    STATUS: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    LINK_IMAGE: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = adm_banner;
