var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const usr_list = require("./usr_list");
const usr_login = koneksi.define(
  "USR_LOGIN",
  {
    ID_LOGIN: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_USER: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ID_DROPSITE: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    EMAIL: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    PASSWORD: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ID_CATAGORY: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment:"ADM = admin, USR = user, SPV = supervisor",
    },
    CODE_TOKEN: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    ACTIVATION: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    LOG: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
usr_login.hasOne(usr_list, { foreignKey: "ID_USER" });
usr_login.belongsTo(usr_list, { foreignKey: "ID_USER" });
module.exports = usr_login;
