import {call} from './api.js';import {matches} from '../data/mockData.js';
export const startScan=(b)=>call(a=>a.post('/detection/scan',b),()=>({scan_id:'SCN-2041'}));
export const getResults=()=>call(a=>a.get('/detection/results'),()=>matches);
export const getResult=(id)=>call(a=>a.get(`/detection/results/${id}`),()=>matches.find(m=>m.id===id));
