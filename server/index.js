const express = require("express");
import cookieParser from "cookie-parser";
import http from "http";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel n"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
