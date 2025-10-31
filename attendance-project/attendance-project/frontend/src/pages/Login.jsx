import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Login(){
  const [c,setC]=useState({email:'',password:''});
  const { login } = useContext(AuthContext);
  const nav = useNavigate();
  const submit=async e=>{ e.preventDefault(); try{ await login(c.email,c.password); nav('/'); }catch(err){ alert(err.message||'Login failed'); }};
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input required placeholder="Email" value={c.email} onChange={e=>setC({...c,email:e.target.value})} />
        <input required type="password" placeholder="Password" value={c.password} onChange={e=>setC({...c,password:e.target.value})} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
