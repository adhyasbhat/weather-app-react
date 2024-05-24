import { useState } from 'react'
import './App.css'
import Header  from './assets/Components/Header/header' 
import Dashboard from './assets/Components/Dashboard/dashboard'
function App() {

  return (
    <div className='d-grid justify-content-center'>
    <Header />
   <Dashboard/>
     
    </div>
  )
}

export default App
