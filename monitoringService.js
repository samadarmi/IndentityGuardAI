import {call} from './api.js';import {history} from '../data/mockData.js';
export const getHistory=()=>call(a=>a.get('/monitoring/history'),()=>history);
export const getScan=(id)=>call(a=>a.get(`/monitoring/history/${id}`),()=>history.find(h=>h.id===id));
