const { json } = require('body-parser');
const express = require('express');
const mysql = require('mysql2');
const app = express();

const port = 3000;

app.use(express.json()); //middleware to parse JSON data
app.use(express.urlencoded({extended:true}));

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'993450@Awi',
    database:'mydatabase'
});
db.connect((err) =>{
    if(err){
        console.error("error connecting to database",err)
        return;
    }
});
const getAll = "SELECT * FROM candidates";
const getById = "SELECT *FROM candidates where candidateId = ?";
const inserCandidates = "INSERT INTO candidates(name,email,age) VALUES (? ,?, ?)";
const updateCandidates = "UPDATE candidates SET name = ?,email =?,age=? WHERE CandidateId = ?";
const deleteCandidates = "DELETE FROM candidates WHERE CandidateId =?"

app.get('/api/candidates',(req,res)=>{
    db.query(getAll,(err,results)=>{
if(err){
    console.log('Error fetching contacts:',err);
    res.status(500).json({error:'internal server error'});
    return;
}
res.json(results);
    });
});

app.get('/api/candidates/:id',(req,res)=>{
    const candidateId = req.params.id;
    db.query(getById, candidateId,(err,results)=>{
        if(err){
            console.log('error fetching candidate',err);
            res.status(500).json({error:'internal server error'});
            return;
        }
        res.json(results[0]);
    });
});

app.post('/api/candidates',(req,res)=>{
    const {name,email,age} = req.body;
    console.log(req.body);
    db.query(inserCandidates,[name,email,age],(err,results)=>{
        if(err){
            console.log('error creating candidates',err);
            res.status(500).json({error:'internal server error'});
            return;

        }
        res.status(201).json({message:'Candidate created',candidateId:results.insertId});

    }
);
});

app.put('/api/candidates/:id',(req,res)=>{
    const candidateId = req.params.id;
    const{name,email,age} = req.body;
    db.query(updateCandidates,[name,email,age,candidateId],(err,results)=>{
        if(err){
            console.error('error updating contact',err);
            res.status(500).json({error:'internal server error'});
            return;
        }
        res.json({message:'Candidate updated'});
    });
});

app.delete('/api/candidates/:id',(req,res)=>{
const candidateId = req.params.id;
db.query(deleteCandidates,candidateId,(err,results)=>{
    if(err){
        console.error('error deleting contact',err);
        res.status(500),json({error:'internal server error'});
        return;
    }
    res.json({message:'contact deleted'});
});
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'Ex06RestApi.html');
});

app.listen(port,()=>{
    console.log(`rest api is hosted here ${port}`);
})