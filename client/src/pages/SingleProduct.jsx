import React, { useEffect, useState } from 'react'
import { Link ,useParams } from 'react-router-dom'
import { customFetch, generateAmountOptions } from '../utils';
import { useGlobalContext } from '../context';

const SingleProduct = () => {
  const {customer,fetchCart} = useGlobalContext();
  const [product,setProduct] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  // amount
  const [amount,setAmount] = useState(1);
  const handleAmount = (e) => {
    console.log(amount);
    setAmount(e.target.value)
  }

  useEffect(() => {
    setLoading(true)
    customFetch(`/products/${id}`)
    .then(response => {
      setProduct(response.data[0])
    })
    setLoading(false)
  },[])
  const {product_name,cost,image,product_company,color,size,gender} =  product;

    if(loading) {
      return <h1>Loading</h1>
    }
    const addToCart = async () => {
      let intAmount = parseInt(amount);
      const add = {
        cart_quantity : intAmount,
        cart_id : customer.cart_id,
        product_id : id,
        purchased : "no"
      }
      console.log(add);
      try {
        const response = await customFetch.post('/cart',add)
        const data = await response.data;
        console.log(data);
        fetchCart()
      } catch (error) {
        console.log(error);
      }
    }

  return (

<section>
<div className='text-md breadcrumbs'>
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/products'>Products</Link>
    </li>
  </ul>
</div>
{/* PRODUCTS */}
<div className='mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16'>
  <img src={image} alt={product_name} className='w-96 h-96 object-cover rounded-lg lg:w-full  ' />
  <div>
    <h1 className='capitalize text-3xl font-bold'>{product_name}</h1>
    <h4 className='text-xl text-neutral-content font-bold mt-2'>
      {product_company}
    </h4>

    {/* <p className='mt-3 text-xl'>{dollarsAmount}</p> */}

    {/* <p className='mt-6 leading-8'>{description}</p> */}

    {/* COLORS */}
    <div className='mt-6'>
      <h4 className='text-md font-medium tracking-wider capitalize'>
        colors
      </h4>
      <div className='mt-2'>
        {color}
      </div>
    </div>
    {/* AMOUNT */}
    <div className='form-control w-full max-w-xs'>
      <label className='label'>
        <h4 className='text-md font-medium tracking-wider capitalize'>
          amount = {cost}
        </h4>
      </label>

      <select className="select select-bordered select-md select-secondary"
      value={amount} onChange={handleAmount}>
        {generateAmountOptions(20)}
      </select>
    </div>
    {/* CART BTN */}
    <div className="mt-10">
      <button className="btn btn-secondary btn-md uppercase" onClick={addToCart}>
        Add To Bag
      </button>
    </div>

  </div>
</div>

</section>
  )
}

export default SingleProduct