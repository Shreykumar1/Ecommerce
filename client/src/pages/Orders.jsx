import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context';
import { toast } from 'react-toastify';
import {  useNavigate} from 'react-router-dom';
import { SectionTitle, OrderList } from '../components';
import { customFetch } from '../utils';



const Orders = () => {
  const {customer} = useGlobalContext();
  const [loading,setLoading] = useState(false);
  const [payments,setPayments] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!customer){
      navigate('/');
      toast.error("Login to view your Orders")
    }else{
      fetchOrders();
    }
  },[])

  const fetchOrders = async () => {
    try {
      const reponse = await customFetch.get(`/payment/${customer.cart_id}`);
      const data = reponse.data;
      console.log(data);
      setPayments(data.payments);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <SectionTitle text='Order' />
      <OrderList payments={payments} />
    </>
  )
}

export default Orders