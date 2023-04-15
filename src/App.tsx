import React from 'react'
import { Box } from '@mui/material'
import Routes from './Router'
import { Header } from './components/features/Header'
import { Circles } from './components/features/Design/Circles'

import './App.css'

const App = () => {
  return (
    <Box className="App">
      <Circles />
      <Header />
      <Routes />
    </Box>
  )
}

export default App
