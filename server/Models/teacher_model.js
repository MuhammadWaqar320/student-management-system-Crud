import mongoose from "mongoose";
const Teacher_Schema=mongoose.Schema(
    {
        emp_no:Number,
        name:String,
        f_name:String,
        section:
        {
            type:String,
            default:'Null'
        },
        qual:String,
        spec:String
    }
);
const Teacher_Model=mongoose.model('Teacher',Teacher_Schema);
export default Teacher_Model;