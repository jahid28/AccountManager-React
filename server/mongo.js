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



const userCollection = mongoose.model("userCollection", userSchema)


// export { userCollection, productCollection, cartCollection,orderCollection };
const collections = {
   userCollection
  };
  
  module.exports = collections;