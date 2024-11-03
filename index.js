const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
const port=5000;
const mongoDB=require("./db")
mongoDB();

app.get("/",(req,res)=>{
   res.send("Hello World")
})

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
    
app.listen(port, () => {
  console.log(`Database running & Listining on port: ${port}`)
});
