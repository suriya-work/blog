
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Card from './components/card/Card'
// imported articles in banner
// imported Card in banner
// imported About in and link to About 
// imported card in and link to Blog 
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/about' element={<About />} />
        <Route path='/card' element={<Card />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
