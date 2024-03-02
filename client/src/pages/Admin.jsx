import React, { useEffect } from 'react'
import { useGlobalContext } from '../context';
import { toast } from 'react-toastify';
import {  Link, Outlet, useNavigate} from 'react-router-dom';



const Admin = () => {
  const {customer} = useGlobalContext();
    const custLocal = JSON.parse(localStorage.getItem('customer')) || null ;
  const navigate = useNavigate();
  useEffect(()=>{
    if(!custLocal){
      navigate('/');
      toast.error("Login to Site")
    }
    if(custLocal.role === "user"){
      navigate('/');
      toast.error("Not Authorized to access Admin Panel")
    }
  },[])


  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-shrink-0 w-64 bg-gray-800">
        {/* Sidebar */}
        <div className="h-full py-4 flex flex-col ">
          {/* Logo */}
          <div className="px-4">
            <h1 className="text-white text-2xl font-bold">Admin Panel</h1>
          </div>
          {/* Navigation */}
          <nav className="mt-0">
            {/* <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Dashboard</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Products</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Orders</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Customers</a> */}
            <Link to='/admin/product' >Products</Link>
            <Link to='/admin/order' >Orders</Link>
            <Link to='/admin/customer' >Customers</Link>
          </nav>
        </div>
      </div>
      <div className="flex-1 p-6 overflow-y-auto text-blue-700">
        {/* Content */}
        <h2 className="text-2xl font-bold mb-4 text-black">Dashboard</h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-black">
          <p>Welcome to the Admin Panel!</p>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Admin