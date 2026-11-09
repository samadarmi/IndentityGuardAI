import {createContext,useContext,useEffect,useState} from 'react';import * as auth from '../services/authService.js';
const Ctx=createContext();export const useAuth=()=>useContext(Ctx);
export function AuthProvider({children}){
 const [user,setUser]=useState(()=>JSON.parse(localStorage.getItem('ig_user')||'null'));
 const logout=()=>{localStorage.removeItem('ig_token');localStorage.removeItem('ig_user');setUser(null)};
 useEffect(()=>{window.addEventListener('ig-expired',logout);return()=>window.removeEventListener('ig-expired',logout)},[]);
 const login=async(b)=>{const {data}=await auth.login(b);localStorage.setItem('ig_token',data.access_token);localStorage.setItem('ig_user',JSON.stringify(data.user));setUser(data.user)};
 return <Ctx.Provider value={{user,login,logout,register:auth.register}}>{children}</Ctx.Provider>}
