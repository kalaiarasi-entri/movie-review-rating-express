const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kalaiarasi_entri_db:kalai123@entri.olc8y9b.mongodb.net/?retryWrites=true&w=majority&appName=entri", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connection.on("error", (err) => {
  console.log("Mongo DB Connection Failed", err);
});
