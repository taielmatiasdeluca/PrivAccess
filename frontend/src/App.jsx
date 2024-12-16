import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Router } from 'react-router-dom'
import { MainRouter } from './routes/MainRouter'
import { MainContextProvider } from './context/MainContext'


function App() {
  return (
    <MainContextProvider>
      <MainRouter />
    </MainContextProvider>
  )   
}

export default App
