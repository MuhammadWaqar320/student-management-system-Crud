import Student_Model from "../Models/student_model.js"
export const GetStudent=async(req,res)=>
{
    try 
    {
        const allstudent=await Student_Model.find();
        res.status(200).json(allstudent);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
export const createStudent=async(req,res)=>
{
    const student=req.body;
    console.log(student)
    const newStudent=Student_Model(student);
    try {
        await newStudent.save();
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}
export const DeleteStudent=async(req,res)=>
{
    const id=req.params.id;
    try {
        await Student_Model.findByIdAndRemove(id).exec();
        res.send("deleted")
    } catch (error) {
        
    }
}
