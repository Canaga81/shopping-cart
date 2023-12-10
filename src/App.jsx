import { useState } from 'react'
import './App.css'
import Cart from './Companents/Cart'
import Header from './Companents/Header'
import Products from './Companents/Products'

function App() {

  const [cart, setCart] = useState([])

  const emptyCart = () => {
    setCart([])
  }

  return (

    <div className="container mx-auto p-4">

      <Header cart={cart} />
      <Products cart={cart} setCart={setCart} />
      <Cart cart={cart} emptyCart={emptyCart}  />

    </div>

  )
}

export default App