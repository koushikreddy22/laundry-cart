const mongoose = require("mongoose");
const cors=require('cors');
const app = require('./app.js');
app.use(cors());

const PORT = process.env.PORT || 8080;





mongoose.connect("mongodb+srv://koushik:Mn1MrKr1L45@cluster0.wz0fvfe.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo");
});
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err);
});
app.listen(PORT,()=>{
    console.log("the server is running on",8080);
});