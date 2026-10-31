const express = require('express');
const app = express();
app.use(express.json());

let students=[{
    id:1,
    name:"harsha",
    age:22
},
{
    id:2,
    name:"vinay",
    age:23}];
app.get('/students',(req,res)=>{
    res.send(students);
});
app.get('/students/:id',(req,res)=>{
    const student=students.find(s=>s.id === req.params.id);
    if(!student) return res.status(404).send("not found");
    res.json(student);
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
    students=students.filter(s=>s.id !== req.params.id);
    res.status(204).send("deleted");
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
// this for 