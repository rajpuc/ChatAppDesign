import React from 'react'
import Authentication from './pages/Authentication'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Authentication/>}/>
    </Routes>
  )
}

export default App

