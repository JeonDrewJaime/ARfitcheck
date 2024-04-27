import { useState } from 'react'
import NavigationBar from './Components/NavigationBar.jsx'
import User from './Pages/Customers/User.jsx'
import Admin from './Pages/Admins/Admin.jsx'
import SuperAdmin from './Pages/SuperAdmins/SuperAdmin.jsx'
import Footer from './Components/Footer.jsx'
import Cart from './Pages/Cart.jsx'
import './App.css'
import ProductDescription from './Pages/Customers/ProductDescription.jsx'
import Checkout from './Pages/Customers/Checkout.jsx'
import OrderSuccess from './Pages/Customers/OrderSuccess.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <OrderSuccess/>
     </div>
  )
}

export default App
