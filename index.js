const express = require("express");
require("dotenv").config();
require("./config/database");

const moviesRouter = require("./routes/movies");

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Listening to port : ${port}`);
});
