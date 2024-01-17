require("dotenv").config()
// import cors from 'cors'
// import bcryptjs from 'bcryptjs'
// import express from 'express';
// import nodemailer from 'nodemailer';
// // import jwt from 'jsonwebtoken';
// import { userCollection, productCollection, cartCollection, orderCollection } from "./mongo.js"
// import dotenv from 'dotenv/config';
// import path from 'path'

const cors = require("cors")
// const bcryptjs = require("bcryptjs")
const express = require("express")
// const nodemailer = require("nodemailer")
const { userCollection } = require("./mongo")
const PORT = process.env.MY_PORT || 8000

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// async function hashPass(password) {

//     const res = await bcryptjs.hash(password, 10)
//     return res

// }
// async function compare(userPass, hashPass) {

//     const res = await bcryptjs.compare(userPass, hashPass)
//     return res

// }



app.get("/", cors(), (req, res) => {
    res.send("hello from backend")

})





app.post("/login", async (req, res) => {
    const formData = req.body.formData
    try {

        const check = await userCollection.findOne({ email: formData.email })


        if (check) {
            // const passCheck = await compare(formData.password, check.password)
            formData.password==check.password ? res.json("loginPass") : res.json("loginFail")

        }
        else {
            res.json("nouser")
        }

    }
    catch (e) {
        res.json("fail")
    }

})



app.post("/signup", async (req, res) => {
    const formData = req.body.formData

    const data = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        password:formData.password
    }

    try {
        const check = await userCollection.findOne({ email: formData.email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await userCollection.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})
app.post("/test", async (req, res) => {
   
    try {
        
       
            res.json("passed")
         

    }
    catch (e) {
        res.json("failed")
    }

})



app.listen(PORT);
