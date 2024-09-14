const express = require('express');
const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const cors= require('cors');
const app = express();
dotenv.config();
const PORT=process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('Hello World! how are you? I am fine');
})

app.listen(PORT,()=>{
    console.log('listening on port ${PORT}');
});
