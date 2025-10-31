import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import request from '../services/api';
import AttendanceForm from '../components/AttendanceForm';

export default function Dashboard(){
  const { user, logout } = useContext(AuthContext);
  const [list, setList] = useState([]);
  useEffect(()=>{ const load = async ()=>{ try{ const res = await request('/attendance/class/' + (user?.role==='teacher'?'A':'A')); setList(res); }catch(e){ } }; if(user) load(); },[user]);
  return (
    <div className="container">
      <h2>Welcome, {user?.name} ({user?.role})</h2>
      <button onClick={logout}>Logout</button>
      {user?.role==='teacher' && <AttendanceForm onCreated={(a)=>setList([a,...list])} />}
      <h3>Attendance sheets</h3>
      <ul>{list.map(l=> <li key={l._id}>{new Date(l.date).toLocaleDateString()} — {l.className}</li>)}</ul>
    </div>
  );
}
