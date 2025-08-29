import React from 'react'
import { myStore } from '../Context/zustandStore'

function Employess() {
  const { counter, incrementCount, decrementCount } = myStore();
  return (
    <div>
      <h2>Employees</h2>
      <button onClick={incrementCount}>+</button>
        <span>
          <h3>{counter}</h3>
        </span>
      <button onClick={decrementCount}>-</button>
    </div>
  )
}

export default Employess
