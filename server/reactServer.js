require("dotenv").config();
// import cors from 'cors'
// import bcryptjs from 'bcryptjs'
// import express from 'express';
// import nodemailer from 'nodemailer';
// // import jwt from 'jsonwebtoken';
// import { userCollection, productCollection, cartCollection, orderCollection } from "./mongo.js"
// import dotenv from 'dotenv/config';
// import path from 'path'

const cors = require("cors");
// const bcryptjs = require("bcryptjs")
const express = require("express");
// const nodemailer = require("nodemailer")
const { userCollection, accountCollection } = require("./mongo");
const PORT = process.env.MY_PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// async function hashPass(password) {

//     const res = await bcryptjs.hash(password, 10)
//     return res

// }
// async function compare(userPass, hashPass) {

//     const res = await bcryptjs.compare(userPass, hashPass)
//     return res

// }

app.get("/", cors(), (req, res) => {
  res.send("hello from backend");
});

app.post("/login", async (req, res) => {
  const formData = req.body.formData;
  try {
    const check = await userCollection.findOne({ email: formData.email });

    if (check) {
      // const passCheck = await compare(formData.password, check.password)
      formData.password == check.password
        ? res.json("loginPass")
        : res.json("loginFail");
    } else {
      res.json("nouser");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const formData = req.body.formData;

  const data = {
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    password: formData.password,
  };

  try {
    const check = await userCollection.findOne({ email: formData.email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await userCollection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});



app.post("/addtoaccount", async (req, res) => {
  const formData = req.body.formData;

  const data = {
    email: formData.email,
    account_num: formData.account_num,
    ifsc_code: formData.ifsc_code,
    pin: formData.pin,
    web_link: formData.web_link,
  };

  try {
    await accountCollection.insertMany([data]);
    res.json("success")
  } catch (e) {
    res.json("fail");
  }
});



app.post("/delfromaccount", async (req, res) => {
    try {
    const _id = req.body._id;
    await accountCollection.deleteOne({_id:_id})
    res.json("deleted")
  } catch (e) {
    res.json("fail");
  }
});

app.post("/getfromaccount", async (req, res) => {
  try {
    const cookieVal = req.body.cookieValue;

    const check = await accountCollection.find({ email: cookieVal });

    if (check.length != 0) {
      let arr = [];

      Promise.all(
        check.map(async (e) => {
          // const checkInProducts = await productCollection.findOne({ name: e.nameOfProduct })
          let account_num = e.account_num;
          let ifsc_code = e.ifsc_code;
          let pin = e.pin;
          let web_link = e.web_link;
          let _id = e._id;

          arr.push({ account_num, ifsc_code, pin, web_link,_id });
        })
      )
        .then(() => {
          res.json(arr);
        })
        .catch((error) => {
          res.json("fail");
        });
    } else {
      res.json([]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(PORT);
