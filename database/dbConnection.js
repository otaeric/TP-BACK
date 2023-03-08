const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://otaeric:e2r2i2c2@cluster0.4zbiy8h.mongodb.net/test") ; 

    console.log("Conectado a la base de datos...");
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = dbConnect;
