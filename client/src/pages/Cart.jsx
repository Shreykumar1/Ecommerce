import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { CartItemsList, SectionTitle, CartTotals  } from '../components';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';


const Cart = () => {
  const {cart, customer, fetchCart} = useGlobalContext();
  const [type, setType] = useState(null);
  const handleType = (e) => {
    if(e.target.value !== "default"){
      setType(e.target.value);
    }
    console.log(e.target.value);
  }
  const createPayment = async () => {
    console.log(type);
    event.preventDefault();
    if(!type){
      toast.error("Please Select Payment Type")
    }else{
    try {
      const response = await customFetch.post(`/payment`,
      {
        payment_type : type,
        customer_id : customer.customer_id,
        cart_id : customer.cart_id
      })
      const data = await response.data ;
       console.log(data);
       toast.success("Order created Successfully");
       fetchCart();
    } catch (error) {
      console.log(error);

    }
  }
  }
  return (
    <>
    <SectionTitle text='Shopping Cart' />
    <div className='mt-8 grid gap-8 lg:grid-cols-12'>
      <div className="lg:col-span-8">
        <CartItemsList />
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotals type={type} handleType={handleType}/>
        {customer ? <button  className='btn btn-primary btn-block mt-8 uppercase' onClick={createPayment}>Place Your Order</button>
        : <Link to='/login' className='btn btn-primary btn-block mt-8   uppercase'>please Login</Link>}
      </div>
    </div>
    </>
  )
}

export default Cart