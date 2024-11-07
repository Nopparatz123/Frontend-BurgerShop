import { useState } from 'react'


import Navbar from './components/Navbar'
import './Css/Navbar.css'

import Barup from './components/Barup'
import './Css/Barup.css'

import Card from './components/Card'
import './Css/Crad.css'

import Topmenu from './components/Topmenu'
import './Css/Topmenu.css'



function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Navbar />
    <Barup />
    <Card />
    <Topmenu />

 
    
    </>
  )
}

export default App
