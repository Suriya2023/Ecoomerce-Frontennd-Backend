import React from 'react'
import { Routes, Route } from "react-router-dom";
import EcommerceHomepage from './Component/EcommerceHomepage';
import ExclusiveEcommerce from './Component/ExclusiveEcommerce'
import ExclusiveAbout from './Component/ExclusiveAbout';
import ExclusiveContactPage from './Component/ExclusiveContactPage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<EcommerceHomepage />} />
      <Route path='/ExclusiveEcommerce' element={<ExclusiveEcommerce />} />
      <Route path='/ExclusiveAbout' element={<ExclusiveAbout />} />
      <Route path='/ExclusiveContactPage' element={<ExclusiveContactPage />} />
    </Routes>
  )
}

export default App
