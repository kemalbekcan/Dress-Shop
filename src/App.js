import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Basket from './pages/Basket'
class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sepet" element={<Basket />} />
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

export default App
