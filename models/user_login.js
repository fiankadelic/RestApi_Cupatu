var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const user = require("./user");
const user_login = koneksi.define(
  "user_login",
  {
    id_login: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    no_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password_login: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    level_login: {
      type: Sequelize.STRING,
      allowNull: false,
      comment:"ADM = admin, USR = user, SPV = supervisor",
    },
    token_login: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    aktivasi_login: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    log_id_login: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
user_login.hasOne(user, { foreignKey: "no_user" });
user_login.belongsTo(user, { foreignKey: "no_user" });
module.exports = user_login;
