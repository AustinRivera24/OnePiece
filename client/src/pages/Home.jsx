import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

import './home.css'

function Home() {


  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Home
