import axios from 'axios';
const base_url  = 'http://localhost:4000/Student'

export const StudentAxios = {
    getAll:async()=>(await axios.get(base_url)).data,
    getById:async(id)=>(await axios.get(`${base_url}/${id}`)).data,
    addStudent:async(rec)=>(await axios.post(`${base_url}`,rec)).data
}
