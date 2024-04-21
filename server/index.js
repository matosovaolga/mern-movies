const express = require("express");
const cookieParser = require("cookie-parser");
const cors =  require("cors");
const http = require("http");
const dotenv =  require("dotenv/config");
const routes = require("./src/routes/index.js");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.use("/api/v1", routes);

const PORT = process.env.PORT || 6000;

const server = http.createServer(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app;
