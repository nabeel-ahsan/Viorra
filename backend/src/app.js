import express from "express";
import mongoose from "mongoose";

import {Server} from "socket.io";

import {createServer} from "node:http";

import cors from "cors";

const app = express();

app.get('/home', (req,res) => {
    res.json({"Hello":"World"});
})

app.listen(8000, () => {
    console.log("App is running on port 8000");
})
