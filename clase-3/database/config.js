const mongoose = require("mongoose");


const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log("conectado a la db");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { dbConnection };
