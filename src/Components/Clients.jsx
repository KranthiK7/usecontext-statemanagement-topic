import React, { useContext } from 'react'
import { DataContext } from '../App'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Clients() {
    const value = useContext(DataContext)

    const onChangeFunction = (e) => {
            value.setNameInputChange(e.target.value)
            value.setDesigInputChange(e.target.value)
    }

    const onChangeDesgiFunction = (e) => {            
            value.setDesigInputChange(e.target.value)
    }

    const displayInputData = () => {
        value.setNameDisplayChange(value.nameInputChange)
        value.setDesigDisplayChange(value.desigInputChange)
    }

  return (
      <div>
          <h2>Clients Form</h2>                  
          
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3" >
              
        <Form.Control type="text" placeholder="name@example.com" onChange={onChangeFunction}  />
          </FloatingLabel >
          
        <FloatingLabel controlId="floatingInput" label="designation" className="mb-3" >
              
        <Form.Control type="text" placeholder="name@example.com" onChange={onChangeDesgiFunction}  />
          </FloatingLabel >

              <button type="button" onClick={displayInputData}>Click</button>
    </div>
  )
}

export default Clients
