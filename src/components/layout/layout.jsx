import React from 'react'
import { Outlet } from 'react-router'
import { Breadcrumb } from '../Breadcrumb'
import { Navbar } from '../navbar'

export const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      <Breadcrumb />
      <Outlet />
    </div>
  )
}

export default Layout
