import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'

const CartTotals = () => {
    const { cartTotal, shipping, tax, orderTotal } = useSelector((state)=> state.cartState)
  return (
    <div className='card bg-base-200'>
        <div className="card-body">
            <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                <span>SubTotal </span>
                <span>{formatPrice(cartTotal)}</span>
            </p>
            <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                <span>Shipping </span>
                <span>{formatPrice(shipping)}</span>
            </p>
            <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                <span>Tax </span>
                <span>{formatPrice(tax)}</span>
            </p>
            <p className='mt-4 flex justify-between text-sm pb-2'>
                <span className='font-bold'>Order </span>
                <span className='font-bold'>{formatPrice(orderTotal)}</span>
            </p>
        </div>
    </div>
  )
}

export default CartTotals