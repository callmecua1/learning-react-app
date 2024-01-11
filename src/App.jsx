import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Categories from './pages/categories/Categories'
import Productpage, { CartContext } from './pages/Productpage/Productpage'
import All from './components/component-pages/All'
import Furniturespages from './components/component-pages/Furniturespages'
import Electronicspages from './components/component-pages/Electronicspage'
import Chairspages from './components/component-pages/chairspage'
import Kitchenpages from './components/component-pages/kithcenpage'
import Lampspages from './components/component-pages/Lampspages'
import Skincarepages from './components/component-pages/skincarepages'

function App() {

  const [cartItem, setCartItem] = useState([]);
  const addToCart = (item) => { 
    setCartItem([...cartItem, item])
  }

   // local storage
   useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={cartItem}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />}>
            <Route path='all' element={<All />} />
            <Route path='furnitures' element={<Furniturespages />} />
            <Route path='electronics' element={<Electronicspages />} />
            <Route path='chairs' element={<Chairspages />} />
            <Route path='lamps' element={<Lampspages />} />
            <Route path='kitchen' element={<Kitchenpages />} />
            <Route path='skincare' element={<Skincarepages />}/>
            <Route />
          </Route>
          <Route path='/categories/product/:id' element={<Productpage />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  )
}

export default App
