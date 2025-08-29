import React, { useContext }  from 'react'
import { DataContext } from '../App'
import Table from 'react-bootstrap/Table';

function Students() {
    
    const value = useContext(DataContext) ;
    localStorage.setItem('inputValue',JSON.stringify(value.nameDisplayChange))
    const localValueDisplay = localStorage.getItem('inputValue')

    return (

        <div>
            <p> just printing stored value....." {localValueDisplay}  "</p>
            <h4>Students form</h4>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ localValueDisplay}</td>
                        <td>{value.nameDisplayChange}</td>
                        <td>{value.desigDisplayChange}</td>
                    </tr>
                </tbody>
            </Table>
            <h2></h2>
            <h2></h2>
          
    </div>
  )
}

export default Students
