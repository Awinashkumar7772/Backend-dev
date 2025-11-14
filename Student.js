const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { urlencoded } = require('body-parser');

const portNo = 4000;
const app = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'993450@Awi',
    database:'newDatabase'
})

const getAll = 'select * from Student';
const getById = "select * from Student where id=?"
const addUser = 'insert into Student (s_name,age,marks,clg) VALUES (?,?,?,?)'

app.get('/Student',(req,res)=>{
    db.query(getAll,(err,result)=>{
        if(err) {console.log(err)}
            else{(console.log(result))
               res.send(result)}
    })
})

app.get('/Student/:id',(req,res)=>{
    db.query(getById,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
})

app.post('/Student',(req,res)=>{
    const {s_name,age,marks,clg} = req.body
    db.query(addUser,[s_name,age,marks,clg],(err,result)=>{
        if(err) {console.log(err)}
            else {console.log(result)
            res.send(result)}
    })
})

app.listen(portNo,()=>{
    console.log(`Server is running on portNo ${portNo}`)
})