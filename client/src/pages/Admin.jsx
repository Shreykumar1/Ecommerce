import React, { useEffect } from 'react'
import { useGlobalContext } from '../context';
import { toast } from 'react-toastify';
import {  Link, NavLink, Outlet, useNavigate} from 'react-router-dom';



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
      <div className="flex-shrink-0 w-64 bg-base-300 ">
        {/* Sidebar */}
        <div className="h-full py-4 flex flex-col ">
          {/* Logo */}
          <div className="px-4">
            <h1 className="text-white text-2xl font-bold">Admin Panel</h1>
          </div>
          {/* Navigation */}
          <nav className="mt-0">
            <NavLink to='/admin' className="block px-4 py-2 text-white focus:bg-gray-700 "  >Dashboard</NavLink>
            <NavLink to='/admin/customer' className="block px-4 py-2 text-white focus:bg-gray-700 "  >Customers</NavLink>
            <NavLink to='/admin/product' className="block px-4 py-2 text-white focus:bg-gray-700 " >Products</NavLink>
            <NavLink to='/admin/order' className="block px-4 py-2 text-white  focus:bg-gray-700 "  >Orders</NavLink>
          </nav>
        </div>
      </div>
      <div className="flex-1 p-6 overflow-y-auto  bg-neutral  text-neutral-content">
        {/* Content */}
        <Outlet />
      </div>
    </div>
  )
}

export default Admin