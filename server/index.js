const express = require("express");
const path = require('path');
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel kik"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
