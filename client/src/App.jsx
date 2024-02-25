import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products/kkE4")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
    {/* <h1 className="text-3xl font-bold underline bg-black">
      Hello world!
    </h1> */}
    <h1>
      Hello world
    </h1>
    </>
  )
}

export default App
