import  Express  from "express";
import { GetStudent,createStudent,DeleteStudent } from "../Controlers/student_controler.js";
import { GetTeacher,createTeacher } from "../Controlers/teacher_controler.js";

const router=Express.Router();
// My Application's Routes are here
router.get('/',GetStudent);
router.post('/',createStudent)
router.post('/',createTeacher)
router.get('/', GetTeacher)
router.delete('/:id',DeleteStudent)



export default router