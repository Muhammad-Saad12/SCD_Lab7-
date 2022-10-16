import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express()
dotenv.config()
const port = 3000

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongo")
    }catch(error){
        throw error;
    }
    
};

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


  app.post('/', (req, res) => {});
app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}`)
  })