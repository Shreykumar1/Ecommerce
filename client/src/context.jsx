import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { customFetch } from "./utils";

const url = `http://localhost:3000/api/v1/`
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState(null);

  useEffect(()=>{
    const custLocal = JSON.parse(localStorage.getItem('customer')) || null ;
    console.log("Hello");
    setCustomer(custLocal)
  },[])

  const [cocktails, setCocktails] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    const fetchCart = async () => {
      if(customer){
        const response = await customFetch.get(`cart/${customer.cart_id}`);
        const data = await response.data ;
        console.log(data);
        setCart(data);
      }
      else{
        console.log([]);
      }
    }
    fetchCart()
  },[customer])

  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const response = await customFetch(`/customer`);
      const data = await response.data;
        setCocktails(data)
      
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }
  useEffect(()=>{
    fetchDrinks()
  },[])

  return (
    <AppContext.Provider value={{ loading,  cocktails, customer, setCustomer, cart }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
