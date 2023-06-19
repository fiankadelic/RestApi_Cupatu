var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/usr_list");
var loginRouter = require("./routes/user_login");
var walletRouter = require("./routes/usr_wallet");
var bannerRouter = require("./routes/adm_banner");
var testiRouter = require("./routes/usr_testimonial");
var registerRouter = require("./routes/usr_register");
var forgotRouter = require("./routes/usr_forgot");
var serviceRouter = require("./routes/adm_service");
var orderRouter = require("./routes/usr_order");

var app = express();
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/wallet", walletRouter);
app.use("/banner", bannerRouter);
app.use("/testimonial", testiRouter);
app.use("/register", registerRouter);
app.use("/forgot", forgotRouter);
app.use("/forgot/send", forgotRouter);
app.use("/service", serviceRouter);
app.use("/order", orderRouter);


app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
