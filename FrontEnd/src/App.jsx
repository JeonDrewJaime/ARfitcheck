import { useState } from 'react'
import NavBar from './WIdgets/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <NavBar/>
     </div>
  )
}

export default App
