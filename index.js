const express = require("express");
require("dotenv").config();
require("./config/database");

const moviesRouter = require("./routes/movies");

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api/movies", moviesRouter);
app.get("/ping",(res,req)=>{
  res.setEncoding("pong")
})
app.listen(port, () => {
  console.log(`Listening to port : ${port}`);
});
