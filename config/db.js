const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoUrl");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err.message);
    //exit on failure
    process.exit(1);
  }
};

module.exports = connectDB;
