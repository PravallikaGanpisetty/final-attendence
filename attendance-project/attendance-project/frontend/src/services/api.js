const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const request = async (path, opts = {}) => {
  const token = localStorage.getItem('token');
  const headers = opts.headers || {};
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
  const res = await fetch(`${API_BASE}${path}`, {...opts, headers});
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
};
export default request;
