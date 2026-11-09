import {call} from './api.js';
export const enroll=(files)=>call(a=>{const f=new FormData();files.forEach(x=>f.append('files',x));return a.post('/identity/enroll',f)},()=>({id:'ENR-1001'}));
export const listImages=()=>call(a=>a.get('/identity/reference-images'),()=>[]);
export const removeImage=(id)=>call(a=>a.delete(`/identity/reference-images/${id}`),()=>({ok:true}));
