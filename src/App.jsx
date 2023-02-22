import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './assets/containers/Hero'
import Catalogue from './assets/containers/Catalogue'
import Cart from './assets/containers/Cart'
import ItemListContainer from './assets/containers/ItemListContainer'
import ItemDetailContainer from './assets/components/ItemDetailContainer'

function App() {
  return (
      <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/catalogue' element={<ItemListContainer />} />
          <Route exact path='/categoria/:categoria'
          element={<ItemListContainer/>}
          />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={ <Cart/> } />
        </Routes>

      </BrowserRouter>


      </>
  )
}

export default App
