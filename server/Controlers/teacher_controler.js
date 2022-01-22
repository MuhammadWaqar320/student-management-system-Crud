
import Teacher_Model from "../Models/teacher_model.js";
export const GetTeacher=async(req,res)=>
{
    try 
    {
        const allTeacher=await Teacher_Model.find();
        res.status(200).json(allTeacher);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
export const createTeacher=async(req,res)=>
{
    const teacher=req.body;
    const newTeacher=Teacher_Model(teacher);
    try {
        await newTeacher.save();
        res.status(201).json(newTeacher)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}