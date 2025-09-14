import React, { useContext } from 'react'
import { DataContext } from '../App'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Clients() {
    const value = useContext(DataContext)

    const onChangeFunction = (e) => {
        value.setNameInputChange(e.target.value)
    }

    const onChangeDesgiFunction = (e) => {            
        value.setDesigInputChange(e.target.value)
    }

    const displayInputData = () => {
        value.setNameDisplayChange(value.nameInputChange)
        value.setDesigDisplayChange(value.desigInputChange)
        

        localStorage.setItem('userName', value.nameInputChange)
        localStorage.setItem('userDesignation', value.desigInputChange)
        localStorage.setItem('inputValue', JSON.stringify(value.nameInputChange))
    }

    return (
        <div>
            <h2>Clients Form</h2>                  
            
            <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
                <Form.Control 
                    type="text" 
                    placeholder="name@example.com" 
                    onChange={onChangeFunction}
                    value={value.nameInputChange}
                />
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingInput2" label="designation" className="mb-3">
                <Form.Control 
                    type="text" 
                    placeholder="name@example.com" 
                    onChange={onChangeDesgiFunction}
                    value={value.desigInputChange}
                />
            </FloatingLabel>

            <button type="button" onClick={displayInputData}>Click</button>
        </div>
    )
}

export default Clients
