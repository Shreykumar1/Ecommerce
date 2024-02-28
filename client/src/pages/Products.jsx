import React from 'react'
import { ProductsContainer } from '../components'
import { customFetch } from '../utils';

export const loader =  async () => {
  const response = await customFetch('/products')
  const products = await response.data.products;
  console.log(products);
  return {products};
}

const Products = () => {
  return (
    <div>
      <ProductsContainer />
    </div>
  )
}

export default Products