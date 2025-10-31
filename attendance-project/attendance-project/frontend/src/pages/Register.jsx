import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Register(){
  const [f,setF]=useState({name:'',email:'',password:'',role:'student'});
  const { register } = useContext(AuthContext);
  const nav = useNavigate();
  const submit=async e=>{ e.preventDefault(); try{ await register(f); nav('/'); }catch(err){ alert(err.message||'Register failed'); }};
  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input required placeholder="Name" value={f.name} onChange={e=>setF({...f,name:e.target.value})} />
        <input required placeholder="Email" value={f.email} onChange={e=>setF({...f,email:e.target.value})} />
        <input required type="password" placeholder="Password" value={f.password} onChange={e=>setF({...f,password:e.target.value})} />
        <select value={f.role} onChange={e=>setF({...f,role:e.target.value})}><option value="student">Student</option><option value="teacher">Teacher</option></select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
