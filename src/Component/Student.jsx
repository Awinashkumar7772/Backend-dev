import { useEffect, useState } from "react";
import { StudentAxios } from "../Services/StudentAxios";


export default function Student (){
const [Student,setStudent] = useState([]);
const [form,setForm] = useState({id:0,s_name:"",age:0,marks:0,clg:""})

useEffect(()=>{
    StudentAxios.getAll().then((data)=>setStudent(data))
},[])

const handleChange =(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
}

const handleAdd = async()=>{
    if(!form.s_name||!form.age||!form.marks||!form.clg){
        alert("All fields are required")
        return
    }
    const newRec = await StudentAxios.addStudent(form)
    setStudent([...Student,newRec])
}
return(
    <>
<div className="container m-3">
    <div className="row">
     <div className="col-md-6">
        <div className="row">
            {
                Student.map(stu=>
                     (
                        <div key = {stu.id} className="col-md-4">
                            <div className="card">
                             <div className="card-title text-primary text-center">{stu.s_name}</div>
                             <div className="card-body">
                                <p>Age:{stu.age}</p>
                                <p>Marks:{stu.marks}</p>
                                <p>College:{stu.clg}</p>
                             </div>
                            </div>
                        </div>
                    )
                )}
        </div>
     </div>

    </div>
    </div>
    <div className="col-md-4">
        <h2>New Student </h2>
        
        <input className="form-control m-3" name="s_name" value={form.s_name} onChange={handleChange}  placeholder="Student Name"/>
                <input className="form-control m-3" name="age" value={form.age} onChange={handleChange}  placeholder="Student Age"/>
                        <input className="form-control m-3" name="marks" value={form.marks} onChange={handleChange}  placeholder="Student Marks"/>
                                <input className="form-control m-3" name="clg" value={form.clg} onChange={handleChange}  placeholder="Student College"/>
                                <button onClick={handleAdd} className="btn btn-danger p-3">Add Record</button>
    </div>
    </>
)

}