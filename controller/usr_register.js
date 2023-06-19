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
  dropsite = req.body.id_dropsite_POST;
  password = md5(req.body.password_POST);
  email = req.body.email_POST;
  handphone = req.body.handphone_POST;
  linkreferal = req.body.referal_POST;
  platform = req.body.platform_POST;
  serial = req.body.serial_POST;
  virtual = req.body.PhysicalDevice_POST;
  date_join = new Date();
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
      let getuser_device = await model.usr_device.findAll({
        where: {
          SERIAL_NUMBER: {
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
      let getEmail = await model.usr_login.findAll({
        where: {
          [Op.and]: [{ EMAIL: email }, { ID_CATAGORY: "1" }],
        },
      });
      if (getEmail.length > 0) {
        res.json("already");
      } else {
        checkNoUser();
      }
    }
    async function checkNoUser() {
      let getEmail = await model.usr_list.findAll({
        where: {
          ID_USER: {
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
      await model.usr_list.create({
        ID_USER: nouser,
        FULLNAME: namalengkap,
        HANDPHONE: handphone,
        ADDRESS: "",
        INSTAGRAM: "ID instagram",
        EMAIL: email,
        DATE_JOIN: date_join,
        CODE_REFERRAL: noreferal,
        PHOTO: "user.png",
      });
      if (res.status(200)) {
        insertUserLogin();
      } else {
        res.status(200).json("gagal insert user");
      }
    }
    async function insertUserLogin() {
      await model.usr_login.create({
        ID_USER: nouser,
        EMAIL: email,
        PASSWORD: password,
        ID_DROPSITE: dropsite,
        ID_CATAGORY: "1",
        CODE_TOKEN: token,
        ACTIVATION: "0",
        LOG: "0",
      });
      if (res.status(200)) {
        insertReferral();
      } else {
        res.status(200).json("gagal insert login");
      }
    }
    async function insertReferral() {
      await model.usr_link_referral.create({
        ID_USER: nouser,
        CODE_LINK_REFERRAL: linkreferal,
      });
      if (res.status(200)) {
        insertWallet();
      } else {
        res.status(200).json("gagal insert referral");
      }
    }
    async function insertWallet() {
      await model.usr_wallet.create({
        ID_USER: nouser,
        CASH: 50000,
        COIN: 0,
      });
      if (res.status(200)) {
        insertDevice();
      } else {
        res.status(200).json("gagal insert insert");
      }
    }
    async function insertDevice() {
      await model.usr_device.create({
        ID_USER: nouser,
        SERIAL_NUMBER: serial,
        PLATFORM: platform,
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
