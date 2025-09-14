import React, { createContext, useState } from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Clients from './Components/Clients'
import Employees from './Components/Employess'
import Students from './Components/Students'
import './App.css'

export const DataContext = createContext();

function App() {
  const [nameInputChange, setNameInputChange] = useState('')
  const [nameDisplayChange, setNameDisplayChange] = useState('')
  const [desigInputChange, setDesigInputChange] = useState('')
  const [desigDisplayChange, setDesigDisplayChange] = useState('')

  return (
    <div>  
      <DataContext.Provider value={{
        nameInputChange, setNameInputChange, nameDisplayChange, setNameDisplayChange,
        desigInputChange, setDesigInputChange, desigDisplayChange, setDesigDisplayChange
      }}>
        <Home /> 
        <Routes>
          <Route path='/' element={<Clients/>}/>
          <Route path='/students' element={<Students />} />
          <Route path='/employees' element={<Employees/>}/>
        </Routes>   
      </DataContext.Provider>               
    </div>
  )
}

export default App