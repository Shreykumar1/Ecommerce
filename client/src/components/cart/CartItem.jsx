import React, { useState } from 'react'
import { customFetch, generateAmountOptions } from '../../utils';
import { useGlobalContext } from '../../context';
// import { formatPrice,generateAmountOptions } from '../utils'

const CartItem = ({cartItem}) => {
  const {fetchCart,changeAmount, setChangeAmount } = useGlobalContext()
  const {product_id,product_name,cost,image,cart_quantity,product_company, color,cart_id} = cartItem;
  const [amount,setAmount] = useState(cart_quantity);
  // const removeItemFromTheCart = () => {
  //   dispatch(removeItem({cartID}))
  // }
  const updateQuantity = async (amount,product) => { 
    const response = await customFetch.patch(`/cart/${cart_id}`,
    {
      "cart_quantity" : amount,
      "product_id" : product
    });
    const data = await response.data
  }
  const handleAmount = (e) => {
    setChangeAmount(amount + 1);
    setAmount(e.target.value);
    updateQuantity(e.target.value,product_id);
    fetchCart();
  }
  return (
    <article className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'>
      <img src={image} alt={product_name} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'/>
      <div className='sm:ml-16 sm:w-48'>
        <h3 className="capitalize font-medium">{product_name}</h3>
        <h4 className='mt-2 capitalize text-sm text-neutral-content'>{product_company}</h4>
        <p className="mt-4 capitalize text-sm flex items-center gap-x-2">
          color :
          <span className='badge badge-sm' style={{backgroundColor : color}}></span>
        </p>
      </div>
      <div className='sm:ml-12'>
        <div className="form-control max-w-xs">
        <label htmlFor='amount' className='label p-0'>
            <span className='label-text'>Amount</span>
          </label>
        <select
            name='amount'
            id='amount'
            className='mt-2 select select-base select-bordered select-xs'
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button
          className='mt-2 link link-primary link-hover text-sm'
          // onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>
      <p className='font-medium sm:ml-auto'>{cost/100}</p>
    </article>
  )
}

export default CartItem


// import React from 'react'

// const CartItem = () => {
//   return (
//     <div>CartItem</div>
//   )
// }

// export default CartItem