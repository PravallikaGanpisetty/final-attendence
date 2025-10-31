import React, { createContext, useEffect, useState } from 'react';
import { request } from '../services/api';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user') || 'null'));
  useEffect(()=>{ if(user) localStorage.setItem('user', JSON.stringify(user)); else localStorage.removeItem('user'); },[user]);
  const login = async (email,password)=>{ const data = await request('/auth/login',{ method:'POST', body: JSON.stringify({email,password}) }); localStorage.setItem('token', data.token); setUser(data); return data; };
  const register = async (payload)=>{ const data = await request('/auth/register',{ method:'POST', body: JSON.stringify(payload) }); localStorage.setItem('token', data.token); setUser(data); return data; };
  const logout = ()=>{ localStorage.removeItem('token'); setUser(null); };
  return <AuthContext.Provider value={{user, login, register, logout}}>{children}</AuthContext.Provider>;
};
