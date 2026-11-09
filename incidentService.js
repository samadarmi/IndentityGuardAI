import {call} from './api.js';import {incidents} from '../data/mockData.js';
export const list=()=>call(a=>a.get('/incidents'),()=>incidents);
export const get=(id)=>call(a=>a.get(`/incidents/${id}`),()=>incidents.find(i=>i.id===id));
export const create=(b)=>call(a=>a.post('/incidents',b),()=>({id:'INC-0099'}));
export const report=(id)=>call(a=>a.get(`/incidents/${id}/report`,{responseType:'blob'}),()=>null);
