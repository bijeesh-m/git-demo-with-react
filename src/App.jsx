import React, { useEffect } from 'react'
import Counter from './pages/Counter'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { loadProducts } from './features/products/productSlice'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const dispatch = useDispatch()

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json()
      dispatch(loadProducts(data.products))
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <Toaster  />
      {/* <Header /> */}
      {/* <Counter/> */}
      {/* <Products /> */}
      {/* <Login/> */}
      <Register/>
    </div>
  )
}

export default App