
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
// imported articles in banner
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Banner />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
