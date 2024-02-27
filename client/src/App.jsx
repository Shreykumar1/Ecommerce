import { useState, useEffect } from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import { Cart,Checkout,Error,HomeLayout,Landing,Login,Orders,Products,Register,SingleProduct, Admin } from './pages';
import { ErrorElement } from './components';
import { useGlobalContext } from './context';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {
  const [count, setCount] = useState(0);
  const { cocktails,loading } = useGlobalContext();
  console.log(cocktails,loading);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products/kkE4")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path : '/',
      element : <HomeLayout />,
      errorElement : <Error />,
      children : [
        {
          index : true,
          element : <Landing />,
          errorElement : <ErrorElement />,
        },
        {
          path : '/products',
          element : <Products />,
          errorElement : <ErrorElement />,
          
        },
        {
          path : '/products/:id',
          element : <SingleProduct />,
          errorElement : <ErrorElement />,
        },
        {
          path : '/cart',
          element : <Cart />
        },
        {
          path : '/checkout',
          element : <Checkout />,
        },
        {
          path : '/orders',
          element : <Orders />,
        },
        {
          path : '/admin',
          element : <Admin />,
        },
      ]
    },
    {
      path : '/login',
      element : <Login />,
      errorElement : <Error />,
    },
    {
      path : '/register',
      element : <Register />,
      errorElement : <Error />,
    },
  ])

  return (
    <>
    <ToastContainer className='self-center' position='top-center' />
      <RouterProvider router={router} />
    </>
  )
}

export default App
