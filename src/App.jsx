
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout';

const NotFound = lazy(() => import('./pages/NotFound'));
const Authentication = lazy(() => import('./pages/Authentication'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Authentication/>}/>
      <Route path="/chat/:chatId" element={<Layout />} />
      {/* Not Found Path handle */}
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App