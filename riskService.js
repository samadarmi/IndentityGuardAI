import {call} from './api.js';import {risk} from '../data/mockData.js';
export const getAssessment=(id)=>call(a=>a.get(`/risk/assessment/${id}`),()=>risk);
