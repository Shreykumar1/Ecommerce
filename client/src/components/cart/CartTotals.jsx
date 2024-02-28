import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';


const CartTotals = () => {
    const {customer,cart, fetchCart,price,calculateTotal,changeAmount} = useGlobalContext();
    console.log(cart);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        calculateTotal()
    },[cart, changeAmount])

    // useEffect(()=>fetchCart,[cart])
    // useEffect(()=>{
    //     console.log("Cart",cart);
    //     if(cart){
    //         setLoading(true)
    //         let value = 0
    //         const map1 = cart.map((x) =>  { 
    //              value = value + x.cart_quantity * x.cost;
    //             return value
    //         });
    //         console.log(value);
    //         const shipping = 500;
    //         const tax = (value/100 + shipping)*5/100;
    //         const totalAmount = value/100 + shipping + tax ;
    //         setPrice({
    //             base : value/100,
    //             shipping : shipping,
    //             tax : tax,
    //             total : totalAmount
    //         })
    //         setLoading(false)
    //     }
    // },[cart])


    // if(loading){
    //     return <h1>Loading</h1>
    // }


    // const {base,shipping,tax,total} = price
  return (
    <div className='card bg-base-200'>
        <div className="card-body">
            <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                <span>SubTotal </span>
                <span>{price.base}</span>
            </p>
            <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                <span>Shipping </span>
                <span>{price.shipping}</span>
            </p>
            <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                <span>Tax </span>
                <span>{price.tax}</span>
            </p>
            <p className='mt-4 flex justify-between text-sm pb-2'>
                <span className='font-bold'>Order </span>
                <span className='font-bold'>{price.total}</span>
            </p>
        </div>
    </div>
  )
}

export default CartTotals