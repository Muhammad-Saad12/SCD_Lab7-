import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url';
import userModel from './model/schema.js';

const __filename = fileURLToPath(import.meta.url);
var router = express.Router();
var user=userModel.find({});

const __dirname = path.dirname(__filename);

const app = express()
dotenv.config()
const port = 3000


app.use(bodyParser.urlencoded({extended:true}));

mongoose.connection.on('connected',()=>{
    console.log("Connected to database");
})
mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected from database");
})

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongo")
    }catch(error){
        throw error;
    }
    
};

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
  })


app.post('/', (req, res) => {
    var user=new userModel({name:req.body.name});
    user.save();
    res.send("<h1>Your username '"+req.body.name+"' has been stored in the DB. </h1>")
    });
    


app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}`)
  });