import React, { useState } from 'react'
import { Form, Link,  redirect, useNavigate, useSearchParams } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useGlobalContext } from '../context';


// export const action =  async ({request}) => {
//     const formData = await request.formData();
//     const data = Object.fromEntries(formData);
//     try {
//       const response = await axios.post('http://localhost:3000/api/v1/customer/login', data);
//       console.log(response);
//       toast.success('logged in successfully');
//       return redirect('/');
//     } catch (error) {
//       console.log(error);
//       const errorMessage =
//         error?.response?.data?.error?.message ||
//         'please double check your credentials';
  
//       toast.error(errorMessage);
//       return null;
//     }
//   }




const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {customer, setCustomer} = useGlobalContext();
    const navigate = useNavigate();

   async function  handleLogin(event){
    event.preventDefault();
        try {

            const response = await axios.post('http://localhost:3000/api/v1/customer/login',{
                email : email,
                password : password
            });
            const data = await response.data;
            console.log(data.customer[0]);
            localStorage.setItem('customer',JSON.stringify(data.customer[0]));
            setCustomer(data.customer[0]);
            toast.success("Logged In Successfully");
            navigate('/');


        } catch (error) {
            console.log(error.response.data.msg);
            toast.error(error.response.data.msg);
        }
    
    }
    function handleChange(event){
        console.log("Yo",event.target.value);
        setEmail(event.target.value);
    }
    return (
        <section className='h-screen grid place-items-center'>
            <form  onSubmit={handleLogin} className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
                <h4 className='text-center text-3xl font-bold'>Login</h4>
                <input type="text" defaultValue={"harshitraj@yahoo.com"} placeholder='Email' onChange={e => setEmail(e.target.value)}  className='input input-bordered' />
                <input type="text" defaultValue={"9877888"} placeholder='Password' onChange={e => setPassword(e.target.value)}  className='input input-bordered'  />
                <div className="mt-4">
                    <SubmitBtn text='Login'  />
                </div>
                {/* <button type='button' className='btn btn-block btn-secondary' onClick={loginAsGuestUser}>Guest User</button> */}
                <p className="text-center">
                    Not a member yet? <Link to='/register' className='ml-2 link link-hover link-primary'>Register</Link>
                </p>
            </form>
        </section>
    )
}

export default Login