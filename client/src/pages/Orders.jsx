import React, { useEffect } from 'react'
import { useGlobalContext } from '../context';
import { toast } from 'react-toastify';
import {  useNavigate} from 'react-router-dom';



const Orders = () => {
  const {customer} = useGlobalContext();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!customer){
      navigate('/');
      toast.error("Login to view your Orders")
    }
  },[])


  return (
    <div>Orders</div>
  )
}

export default Orders