var koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const user = require("./user");
const testi = koneksi.define(
  "user_testimonial",
  {
    id_testi: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    noorder: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    no_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nama_user: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    keterangan_testi: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    rating_testi: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
testi.hasOne(user, { foreignKey: "no_user" });
testi.belongsTo(user, { foreignKey: "no_user" });
module.exports = testi;
