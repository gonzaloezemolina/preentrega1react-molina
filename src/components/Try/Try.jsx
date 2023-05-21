import React, { useState } from 'react'

function Counter() {

    const [Number,setNumber] = useState(0)

    function sumar() {
        setNumber(Number + 1)
    }

    function restar() {
        setNumber(Number - 1)
    }

  return (
    <div>
      <h1>Contador para desestresar</h1>
    <h3>{Number}</h3>
    <button onClick={sumar}>Sumar</button>
    <button onClick={restar}>Restar</button>
    </div>
  )
}

export default Counter