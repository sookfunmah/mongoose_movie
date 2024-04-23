const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.set("debug", true);

mongoose.connect(process.env.DATABASE_URL);

db.on("connected", function () {
  console.log(`Connected to MongoDB`);
});
