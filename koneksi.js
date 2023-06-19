const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("INNO_CUPATU", "admin", "s3nyumpag1h4ri", {
  host: "localhost",
  dialect: "mysql",
});
try {
  sequelize.authenticate();
  sequelize.sync({ alter: true });
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
module.exports = sequelize;
