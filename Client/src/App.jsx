import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { privateRoutes, publicRoutes } from './routes/routes'


function App() {
  const isLogin = useSelector(state=> state.user.isLogin)


  return (
    <>
    <RouterProvider router={isLogin ? privateRoutes : publicRoutes}>

    </RouterProvider>
    </>
  )
}

export default App
