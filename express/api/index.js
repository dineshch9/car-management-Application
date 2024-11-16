// import router from "./routes/record";
import router from "./routes/record.js";
import cors from "cors";
import express from 'express';

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());
app.use(express.json());



app.get('/',router);

app.get('/sd',(req,res)=>res.send("express on versel done"));









app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });


  export default app;

