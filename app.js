var express=require('express');
const mongoose=require("mongoose");
var app=express();
const cors=require("cors");
//require("dotenv").config();
const PORT=4000;
/*const corsOptions={
    origin:"https://reacttest-07ic.onrender.com"
}*/
app.use(express.json());
//app.use(cors(corsOptions));
//mongoose.connect(process.env.MONGODB_URI).then(()=>{
    
    app.get("/",(req,res)=>{
        res.status(201);
        res.send("<h1>database connected</h1>");
    });
//});
    
    app.listen(PORT,()=>
        {
        console.log(`App is listing on port ${PORT}`);
});

