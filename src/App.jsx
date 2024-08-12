import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact_us'
import './App.css'

function App() {
  const [check, checkFunc] = useState("test")

  let router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /> <Home /></>
    },
    {
      path: '/about',
      element: <><Navbar /> <About /></>
    },
    {
      path: '/contact',
      element: <><Navbar /> <Contact /></>
    },
    {
      path: '/',
      element: <><Navbar /> <Contact /></>
    }
  ])


  return (
    <>
      {check == "test"?<button onClick={() => checkFunc("test1")}>Hello Universe</button>: <button onClick={() => checkFunc("test")}>"Hello World"</button>}

      <RouterProvider router={(router)} />
    </>
  )
}

export default App


