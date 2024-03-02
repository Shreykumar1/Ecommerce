import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { formatPrice } from '../../utils';

const AdminProducts = () => {
  const {products} = useLoaderData();
  console.log(products);
  const [limit,setLimit] = useState({
    lower : 0,
    upper : 10
  });
  return (
    <div className='mt-8'>
    <h4 className="capitalize mb-4">
      total products : {products.length}
    </h4>
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Company</th>
            <th>Quantity</th>
            <th>Gender</th>
            <th>Size</th>
            <th className='hidden sm:block'>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.slice(limit.lower,limit.upper)?.map((product)=>{
            const id = product.product_id;
            const {product_name,product_company,image,quantity,cost,gender,size} = product;
            return <tr key={id}>
              <td><img src={image} className='w-12 h-12' alt={product_name} /></td>
              <td>{product_name}</td>
              <td>{product_company}</td>
              <td>{quantity}</td>
              <td>{gender}</td>
              <td>{size}</td>
              <td>{formatPrice(cost)}</td>
              {/* <td className='hidden sm:block'>{date}</td> */}
            </tr>
          })}
        </tbody>
      </table>
    </div>
    <div>
    <button className="btn-sm rounded outline mt-4 disabled:opacity-25 mr-3" disabled={limit.lower === 0 ? true : false} onClick={()=>{
        setLimit({
        lower : limit.lower - 10,
        upper : limit.upper - 10
      })}}
      >Back</button>
      <button className="btn-sm rounded outline mt-4 disabled:opacity-25" disabled={limit.upper >= products.length ? true : false} onClick={()=>{
        if(limit.upper >= products.length ){
          return toast.warn("No More Customers")
        }
        setLimit({
        lower : limit.lower + 10,
        upper : limit.upper + 10
      })}}
      >Next</button>

    </div>
  </div>
  )
}

export default AdminProducts