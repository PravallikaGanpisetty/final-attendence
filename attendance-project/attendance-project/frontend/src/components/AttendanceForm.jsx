import React, { useState } from 'react';
import request from '../services/api';
export default function AttendanceForm({ onCreated }){
  const [date,setDate]=useState('');
  const [className,setClass]=useState('A');
  const [students,setStudents]=useState('');
  const submit=async e=>{ e.preventDefault(); const studentIds = students.split(',').map(s=>s.trim()).filter(Boolean); try{ const res = await request('/attendance', { method:'POST', body: JSON.stringify({ date, className, studentIds }) }); onCreated && onCreated(res); }catch(err){ alert(err.message||'Error'); }};
  return (
    <form onSubmit={submit}>
      <input type="date" value={date} onChange={e=>setDate(e.target.value)} required />
      <input placeholder="Class name" value={className} onChange={e=>setClass(e.target.value)} />
      <input placeholder="Student IDs (comma separated)" value={students} onChange={e=>setStudents(e.target.value)} />
      <button type="submit">Create Attendance</button>
    </form>
  );
}
