

const express = require('express');
const app = express();




app.get('/',(req,res)=>res.send("express on versel"));

app.get('/sd',(req,res)=>res.send("express on versel done"));










app.listen(3001, () => console.log('Server ready on port 3001.'));

module.exports = app;
