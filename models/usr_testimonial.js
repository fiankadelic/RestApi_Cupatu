var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const usr_list = require("./usr_list");
const usr_testimonial = koneksi.define(
  "USR_TESTIMONIAL",
  {
    ID_TESTIMONIAL: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_ORDER: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ID_USER: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    DESCRIPTION: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    RATING: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
usr_testimonial.hasOne(usr_list, { foreignKey: "ID_USER" });
usr_testimonial.belongsTo(usr_list, { foreignKey: "ID_USER" });
module.exports = usr_testimonial;
