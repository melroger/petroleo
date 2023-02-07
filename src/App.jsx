import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './assets/components/NavBar'
import ItemListContainer from './assets/containers/ItemListContainer'
import Video from './assets/components/Video'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <div className='hero'>
        <div className='wrapper'>
          <div className='hero-text'>
           <ItemListContainer greeting= {"Diseños en Blanco y Negro - - - > los colores son las connotaciones de nuestra subjetividad al apreciarlos."}/>
           <img className='chair-hero' src='../src/assets/img/bauhaus-chair.jpg' />
          </div>
          <img className='hero-logo' src='../src/assets/img/hero-logo.svg' />
        </div>
        <Video />
      </div>
    </div>
  )
}

export default App
