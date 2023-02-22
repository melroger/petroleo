import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './assets/containers/Hero'
import Catalogue from './assets/containers/Catalogue'

function App() {
  return (
      <>
      
        <NavBar />
        <Hero />
        <Catalogue />

      </>
  )
}

export default App
