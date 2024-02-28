// import { useLoaderData } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useGlobalContext } from '../../context';
day.extend(advancedFormat);

const OrdersList = ({payments}) => {
  console.log(payments);
  const {customer} = useGlobalContext();
  // const { meta, orders } = useLoaderData();
  return (
    <div className='mt-8'>
      <h4 className="capitalize mb-4">
        total orders : {payments.length}
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Product</th>
              <th>Cost</th>
              <th className='hidden sm:block'>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment)=>{
              const id = payment.payment_id;
              const {  payment_date, total_amount } = payment;
              const date = day(payment_date).format('hh:mm a - MMM Do, YYYY ');

              return <tr key={id}>
                {/* <td>{name}</td> */}
                {/* <td>{customer.address}</td> */}
                {/* <td>{numItemsInCart}</td> */}
                <td>{total_amount/100}</td>
                <td className='hidden sm:block'>{date}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersList