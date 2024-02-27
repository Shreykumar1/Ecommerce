import React, { useEffect } from 'react'
import { useGlobalContext } from '../context';
import { toast } from 'react-toastify';
import {  useNavigate} from 'react-router-dom';



const Admin = () => {
  const {customer} = useGlobalContext();
    const custLocal = JSON.parse(localStorage.getItem('customer')) || null ;
  const navigate = useNavigate();
  useEffect(()=>{
    if(!custLocal){
      navigate('/');
      toast.error("Login to Site")
    }
    if(custLocal.role === "user"){
      navigate('/');
      toast.error("Not Authorized to access Admin Panel")
    }
  },[])


  return (
    <div>Admin</div>
  )
}

export default Admin