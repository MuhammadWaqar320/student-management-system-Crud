// here i am importing modules
import  Express  from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import  Mongoose  from "mongoose";
import Student_router from "./Routes/routes_student.js";
// creating app
const App=Express()
const Cors=cors()
//our App uses
App.use(bodyParser.json({limit:"20mb",extended:true})) 
App.use(bodyParser.urlencoded({limit:"20mb",extended:true})) 
App.use(Cors)
App.use('/sms',Student_router)
// starting server
const PORT=process.env.PORT||8000;
// connections
const connection_string='mongodb+srv://waqar:1234@mernstackapp.jajww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
Mongoose.connect(connection_string,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>App.listen(PORT,()=>
{
    console.log(`server is running on ${PORT}`)
})
).catch((error)=>console.log(error.message))
// Mongoose.set('useFindAndModify',false)
