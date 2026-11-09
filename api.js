import axios from 'axios';
export const USE_MOCK = import.meta.env.VITE_USE_MOCK !== 'false';
const api = axios.create({baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'});
api.interceptors.request.use(c => {const t = localStorage.getItem('ig_token'); if (t) c.headers.Authorization = `Bearer ${t}`; return c;});
api.interceptors.response.use(r => r, e => {if (e.response?.status === 401) {localStorage.removeItem('ig_token'); window.dispatchEvent(new Event('ig-expired'));} return Promise.reject(e);});
// live: (api)=>axios promise; mock: ()=>data. Mock only when VITE_USE_MOCK is not "false".
export const call = async (live, mock) => USE_MOCK ? {data: await new Promise(r => setTimeout(() => r(mock()), 350)), source: 'demo'} : {data: (await live(api)).data, source: 'live'};
export default api;
