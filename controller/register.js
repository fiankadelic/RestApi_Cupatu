const model = require("../models/index");
const controller = {};
const { Op, DATE } = require("sequelize");
var crypto = require("crypto");
const e = require("express");
var md5 = require("md5");

require("dotenv").config();

const mailjet = require("node-mailjet").apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

controller.getDevice = async function (req, res, next) {
  function noReferal(n) {
    for (
      var r = [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ],
        e = n,
        t = new Array(),
        a = 0;
      a <= e - 1;
      a++
    ) {
      t[a] = r[parseInt(Math.random() * r.length)];
      t = t;
      randomtextnumber = t.join("");
    }
  }
  function noUser(n) {
    for (
      var r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        e = n,
        t = new Array(),
        a = 0;
      a <= e - 1;
      a++
    ) {
      t[a] = r[parseInt(Math.random() * r.length)];
      t = t;
      randomtextnumber = t.join("");
    }
  }
  noreferal = (noReferal(8), randomtextnumber);
  nouser = (noUser(4), randomtextnumber);
  namalengkap = req.body.fullname_POST;
  password = md5(req.body.password_POST);
  email = req.body.email_POST;
  handphone = req.body.handphone_POST;
  linkreferal = req.body.referal_POST;
  platform = req.body.platform_POST;
  serial = req.body.serial_POST;
  virtual = req.body.PhysicalDevice_POST;
  Detik = new Date().getSeconds();
  Menit = new Date().getMinutes();
  Jam = new Date().getHours();
  Hari = new Date().getDate();
  Bulan = new Date().getMonth() + 1;
  Tahun = new Date().getFullYear();
  tanggal =
    Hari + "/" + Bulan + "/" + Tahun + " " + Jam + ":" + Menit + ":" + Detik;
  tokentanggal = md5(tanggal);
  token = crypto
    .createHmac("sha256", tokentanggal)
    .update("rahasia123")
    .digest("hex");
  link = "http://cupatu.id/activation.php?t=" + token;
  try {
    if (virtual == "false") {
      res.json("virtual");
    } else {
      checkDevice();
    }
    async function checkDevice() {
      let getuser_device = await model.user_device.findAll({
        where: {
          serial_device: {
            [Op.eq]: serial,
          },
        },
      });
      if (getuser_device.length > 0) {
        res.json("serial");
      } else {
        checkEmail();
      }
    }
    async function checkEmail() {
      let getEmail = await model.user_login.findAll({
        where: {
          [Op.and]: [{ email_user: email }, { level_login: "USR" }],
        },
      });
      if (getEmail.length > 0) {
        res.json("already");
      } else {
        checkNoUser();
      }
    }
    async function checkNoUser() {
      let getEmail = await model.user.findAll({
        where: {
          no_user: {
            [Op.eq]: nouser,
          },
        },
      });
      if (getEmail.length > 0) {
        checkDevice();
      } else {
        insertUser();
      }
    }
    async function insertUser() {
      await model.user.create({
        no_user: nouser,
        nama_user: namalengkap,
        notlp_user: handphone,
        alamat_user: "",
        instagram_user: "ID instagram",
        email_user: email,
        kode_referral: noreferal,
        img_user: "user.png",
      });
      if (res.status(200)) {
        insertUserLogin();
      } else {
        res.status(200).json("gagal insert user");
      }
    }
    async function insertUserLogin() {
      await model.user_login.create({
        no_user: nouser,
        email_user: email,
        password_login: password,
        level_login: "USR",
        token_login: token,
        aktivasi_login: "0",
        log_id_login: "0",
      });
      if (res.status(200)) {
        insertReferral();
      } else {
        res.status(200).json("gagal insert login");
      }
    }
    async function insertReferral() {
      await model.user_link_referral.create({
        no_user: nouser,
        kode_link_referall: linkreferal,
      });
      if (res.status(200)) {
        insertWallet();
      } else {
        res.status(200).json("gagal insert referral");
      }
    }
    async function insertWallet() {
      await model.user_wallet.create({
        no_user: nouser,
        cash_wallet: 50000,
        koin_wallet: 0,
      });
      if (res.status(200)) {
        insertDevice();
      } else {
        res.status(200).json("gagal insert insert");
      }
    }
    async function insertDevice() {
      await model.user_device.create({
        no_user: nouser,
        serial_device: serial,
        platform_device: platform,
      });
      if (res.status(200)) {
        sendEmail();
        // res.status(200).json("success");
      } else {
        res.status(200).json("gagal insert insert");
      }
    }
    async function sendEmail() {
      const contentEmail = `
        <h2>Welcome to myCupatu</h2>
        <p>Hai ${namalengkap}, To activate yout account please click the following button.</p><br/>
        <button style="background: #712a2d; border: white solid; color: white; font-size: 15px; padding: 12px 20px;" onclick="window.location.href='${link}'" type="button">Activate</button><br/><br/>
        <P>If the link doesn't work, copy this URL into your browser:</P><br/>
        ${link}
      `;
      const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "shoecare@cupatu.id",
              Name: "Cupatu Admin",
            },
            To: [
              {
                Email: email,
                Name: namalengkap,
              },
            ],
            Subject: "Confirmation instruction",
            HTMLPart: contentEmail,
          },
        ],
      });
      request
        .then((result) => {
          res.status(200).json("success");
        })
        .catch((err) => {
          res.send({
            status: err.statusCode,
            massage: err.message,
          });
        });
    }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
module.exports = controller;
