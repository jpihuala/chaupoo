import React from 'react'
import { useState } from 'react'



function ItemCount() {
  const [suma, setSuma] = useState(0)
  const [resta,setResta] = useState(0)
  const result = () => {
    setSuma(suma+1)
    setResta(resta-1)


  }

  return (
    <div>
      <label> { result } </label>
      <button onClick={suma}> + </button>
      <button onClick= {resta}> - </button>
    </div>
  )
}

export default ItemCount