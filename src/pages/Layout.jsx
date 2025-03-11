import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NavBar from '../components/NavBar'

const Layout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <ToastContainer/>
    </>
  )
}

export default Layout