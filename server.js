const express = require('express') 
const app = express()
const cors = require('cors');
require('dotenv').config();
const axios = require('axios'); 
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/drinks", { useNewUrlParser: true });
const {getDrinksData , createFav ,getFav ,deleteFav,updateFav}=require('./controller/Drinks.controller');
PORT=process.env.PORT;
app.use(cors()) 
app.use(express.json());


app.get('/', 
 function (req, res) { 
  res.send('Hello World') 
})

app.get('/drinks', getDrinksData);

app.get('/favorite', getFav)
app.post('/favorite', createFav);
app.delete('/favorite/:idx', deleteFav)
app.put('/favorite/:idx', updateFav)
app.listen(PORT,()=>
    console.log('starting at port '+PORT)) 
