import express from "express";
import mongoose from "mongoose";

import { Server } from "socket.io";

import { createServer } from "node:http";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import { log } from "node:console";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

const start = async () => {
  const connectDb = mongoose.connect(
    "mongodb+srv://itsme007nabeel:q6eaCIfmCNxQeav2@cluster0.h1q8au3.mongodb.net/"
  );
  console.log(`DB Connection Host : ${(await connectDb).connection.host}`);

  server.listen(app.get("port"), () => {
    console.log("App is running on port 8000");
  });
};

start();
