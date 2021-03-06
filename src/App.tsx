import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { AboutPage } from './pages/AboutPage'
import { TodosPage } from './pages/TodosPage'

const App: React.FunctionComponent = () =>  {
 
  return ( <BrowserRouter>
    <NavBar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<TodosPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </div>
  </BrowserRouter>
)}

export default App
