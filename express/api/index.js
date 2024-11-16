// import router from "./routes/record";
import records from "./routes/record";
import cors from "cors";
const express = require('express');

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());
app.use(express.json());



app.get('/',records);

app.get('/sd',(req,res)=>res.send("express on versel done"));









app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

module.exports = app;
