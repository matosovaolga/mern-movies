import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
// import "dotenv/config";
// import routes from "./src/routes/index.js";

const app = express();

// app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use("/api/v1", routes);

// const port = normalizePort(process.env.PORT || 3000);

// const server = http.createServer(app);

// mongoose.connect(process.env.MONGODB_URL).then(() => {
//   console.log("Mongodb connected");
//   server.listen(3000, () => {
//     console.log(`Server is listening on port ${3000}`);
//   });
// }).catch((err) => {
//   console.log({ err });
//   process.exit(1);
// });

const start = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    app.listen(3000, () => {
      console.log(`Server start on port ${3000}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
module.exports = app;

//test