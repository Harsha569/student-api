const express = require('express');
const app = express();
app.use(express.json());

let students=[{
    id:1,
    name:"harsha",
    age:22
}];
app.get('/students',(req,res)=>{
    res.send(students);
});
app.get('/students/:id',(req,res)=>{
    const studenet=students.find(s=>s.id === req.params.id);
    res.json(student||{message:"student not found"});
})
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.status(201).json(req.body);
});
app.patch('/students/:id',(req,res)=>{
    const student =student.find(s=>s.id === req.params.id);
    if(!student)return res.status(404).send("not found");
    Object.assign(student,req.body);
    res.json(student);
});
app.delete('/students/:id',(req,res)=>{
    const studentIndex=students.findIndex(s=>s.id === req.params.id);
    if(studentIndex===-1)return res.status(404).send("not found");
    students.splice(studentIndex,1);
    res.json({message:"deleted"});
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});