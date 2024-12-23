import React, { Children } from 'react'
import Topbar from '../Header/Topbar'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'

const PageLayout = ({children}) => {
  return (
    <>
    <Topbar/>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default PageLayout