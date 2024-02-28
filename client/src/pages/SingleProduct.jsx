import React, { useEffect, useState } from 'react'
import { Link ,useParams } from 'react-router-dom'
import { customFetch } from '../utils';

const SingleProduct = () => {
  const [product,setProduct] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  // console.log(id);
  // const fetchSingle = async () => {
  //   try {
  //     const response = await customFetch.get(`/products/${id}`);
  //     const data = await response.data ;
  //     console.log(data);
  //     setProduct(data[0])
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(()=>{
  //   fetchSingle()
  // },[]);
  // console.log(product);

  useEffect(() => {
    setLoading(true)
    customFetch(`/products/${id}`)
    .then(response => {console.log(response.data[0])
      setProduct(response.data[0])
    })
    setLoading(false)
        // 4. Setting *dogImage* to the image url that we received from the response above
    // .then(data => console.log(data))
  },[])
  const {product_name,cost,image,product_company,color,size,gender} =  product;
  console.log({product_name,cost,image,product_company,color} );

    if(loading) {
      return <h1>Loading</h1>
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
        {/* {colors.map((color) => {
          return (
            <button
              key={color}
              type='button'
              className={`badge  w-6 h-6 mr-2  ${ 'border-2 border-secondary'  }`}
              style={{ backgroundColor: color }}
              // onClick={() => setProductColor(color)}
            ></button>
          );
        })} */}
        {color}
      </div>
    </div>
    {/* AMOUNT */}
    <div className='form-control w-full max-w-xs'>
      <label className='label'>
        <h4 className='text-md font-medium tracking-wider capitalize'>
          amount = {cost/100}
        </h4>
      </label>

      {/* <select className="select select-bordered select-md select-secondary"
      value={amount} onChange={handleAmount}>
        {generateAmountOptions(20)}
      </select> */}
    </div>
    {/* CART BTN */}
    <div className="mt-10">
      <button className="btn btn-secondary btn-md uppercase" >
        Add To Bag
      </button>
    </div>

  </div>
</div>

</section>
  )
}

export default SingleProduct