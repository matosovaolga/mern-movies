const express = require("express");
const cookieParser = require("cookie-parser");
const cors =  require("cors");
const http = require("http");
const dotenv =  require("dotenv/config");
const mongoose = require("mongoose");
const routes = require("./src/routes/index.js");


const app = express();

app.use(cors());
app.options("*", cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const PORT = process.env.PORT || 6000;
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.use("/api/v1", routes);



const server = http.createServer(app);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected");
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

module.exports = app;
