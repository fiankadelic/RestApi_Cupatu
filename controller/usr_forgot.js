const model = require("../models/index");
const controller = {};
const { Op } = require("sequelize");
require("dotenv").config();
const encode = require("nodejs-base64-encode");
var md5 = require("md5");

const mailjet = require("node-mailjet").apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

controller.getEmail = async function (req, res) {
  email = req.body.email_POST;
  emailEncode = encode.encode(email, "base64");
  link = "http://cupatu.id/forgot.php?t=" + emailEncode;
  try {
    let getEmailUser = await model.usr_login.findAll({
      where: {
        EMAIL: {
          [Op.eq]: email,
        },
      },
    });
    if (getEmailUser.length > 0) {
      sendEmail();
    } else {
      res.json("nofound");
    }

    async function sendEmail() {
      const contentEmail = `
        <h2>Welcome to myCupatu</h2>
        <p>Sorry to hear you're having trouble logging into mycupatu. please click the following button.</p><br/>
        <button style="background: #712a2d; border: 0px; color: white; font-size: 15px; padding: 12px 20px;" onclick="window.location.href='${link}'" type="button">Reset Password</button><br/><br/>
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
              },
            ],
            Subject: "Reset password instruction",
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
controller.setPassword = async function (req, res) {
  email = req.params.email;
  password = md5(req.body.password_POST);
  try {
    let getEmailUser = await model.usr_login.update(
      {
        PASSWORD: password,
      },
      {
        where: {
          [Op.and]: [{ EMAIL: email }, { ID_CATAGORY: "1" }],
        },
      }
    );
    res.status(200).json("berhasil");
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
module.exports = controller;
