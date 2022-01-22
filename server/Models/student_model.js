import mongoose from "mongoose";
const Student_Schema=mongoose.Schema(
    {
        reg_no:Number,
        name:String,
        Obtained_marks:String,
        fname:String,
        stu_class:String
    }
);
const Student_Model=mongoose.model('Student',Student_Schema);
export default Student_Model;
