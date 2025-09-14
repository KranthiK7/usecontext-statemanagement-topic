import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../App'
import Table from 'react-bootstrap/Table';

function Students() {
    const value = useContext(DataContext);
    const [localValueDisplay, setLocalValueDisplay] = useState('')
    const [localUserName, setLocalUserName] = useState('')
    const [localUserDesignation, setLocalUserDesignation] = useState('')

    useEffect(() => {

        const storedValue = localStorage.getItem('inputValue')
        const storedName = localStorage.getItem('userName')
        const storedDesignation = localStorage.getItem('userDesignation')
        
        if (storedValue) setLocalValueDisplay(storedValue)
        if (storedName) setLocalUserName(storedName)
        if (storedDesignation) setLocalUserDesignation(storedDesignation)
    }, [])

    useEffect(() => {

        if (value.nameDisplayChange) {
            const jsonValue = JSON.stringify(value.nameDisplayChange)
            localStorage.setItem('inputValue', jsonValue)
            localStorage.setItem('userName', value.nameDisplayChange)
            setLocalValueDisplay(jsonValue)
            setLocalUserName(value.nameDisplayChange)
        }
        
        if (value.desigDisplayChange) {
            localStorage.setItem('userDesignation', value.desigDisplayChange)
            setLocalUserDesignation(value.desigDisplayChange)
        }
    }, [value.nameDisplayChange, value.desigDisplayChange])

    return (
        <div>
            <p>just printing stored value....." {localValueDisplay} "</p>
            <h4>Students form</h4>
            <div className="mb-3">
                <p><strong>Stored Name:</strong> {localUserName}</p>
                <p><strong>Stored Designation:</strong> {localUserDesignation}</p>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Stored Name</th>
                        <th>Current Name</th>
                        <th>Stored Designation</th>
                        <th>Current Designation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{localUserName}</td>
                        <td>{value.nameDisplayChange}</td>
                        <td>{localUserDesignation}</td>
                        <td>{value.desigDisplayChange}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Students