import React from 'react'
import { useGlobalContext } from '../context'
import { CartItemsList, SectionTitle, CartTotals  } from '../components';
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cart, customer} = useGlobalContext();
  console.log(cart);
  return (
    <>
    <SectionTitle text='Shopping Cart' />
    <div className='mt-8 grid gap-8 lg:grid-cols-12'>
      <div className="lg:col-span-8">
        <CartItemsList />
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotals />
        {customer ? <Link to='/checkout' className='btn btn-primary btn-block mt-8 uppercase'> proceed to checkout</Link>
        : <Link to='/login' className='btn btn-primary btn-block mt-8   uppercase'>please Login</Link>}
      </div>
    </div>
    </>
  )
}

export default Cart