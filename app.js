const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors=require("cors");
require("dotenv").config();

const corsOptions={
    origin:"https://reacttest-07ic.onrender.com"
}
app.use(express.json());
app.use(cors(corsOptions));
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    const PORT=process.env.PORT || 8000;
    app.listen(PORT,()=>{
        console.log(`App is listing on port ${PORT}`);
    })
    }).catch(err=>{
        console.log(err);
});

app.get("/",(req,res)=>{
    res.status(201).json({message:"connected to Backend"});
})
