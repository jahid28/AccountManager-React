require("dotenv").config()
const mongoose=require("mongoose")
mongoose.connect(`${process.env.MY_DATABASE_URL}`)

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const accountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    account_num: {
        type: Number,
        required: true
    },
    ifsc_code: {
        type: String,
        required: true
    },
    pin: {
        type: Number,
        required: true
    },
    web_link: {
        type: String,
        required: true
    }
})



const userCollection = mongoose.model("userCollection", userSchema)
const accountCollection = mongoose.model("accountCollection", accountSchema)


// export { userCollection, productCollection, cartCollection,orderCollection };
const collections = {
   userCollection,
   accountCollection
  };
  
  module.exports = collections;