import React from 'react'
import { Box } from '@mui/material'
import Routes from './Router'
import Footer from './components/features/Footer'
import { Header } from './components/features/Header'
import { Circles } from './components/features/Design/Circles'
import FastContacts from './components/features/FastContacts'

import './App.css'

const App = () => {
  return (
    <Box className="App">
      <Circles />
      <Header />
      <Routes />
      <FastContacts />
      <Footer />
    </Box>
  )
}

export default App
