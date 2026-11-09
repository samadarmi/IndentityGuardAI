import {call} from './api.js';
export const login=(b)=>call(a=>a.post('/auth/login',b),()=>({access_token:'dev-mock-token',user:{name:'Demo User',email:b.email}}));
export const register=(b)=>call(a=>a.post('/auth/register',b),()=>({ok:true}));
export const me=()=>call(a=>a.get('/auth/me'),()=>({name:'Demo User',email:'demo@example.com'}));
