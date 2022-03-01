import React from 'react'
import {useState} from 'react'

function ItemListContainer({saludo}) {
  const [count, setCount] = useState(0)
  let fecha = Date()

  const handleCount = () => {
    // contador += 1
    // console.log(contador)
    setCount(count+1)
  }
  // console.log(array)


  return (
    <div>
        <h3>{saludo}</h3>
        <label> { fecha }</label>
        <label> { count } </label>
        <button onClick={ handleCount}>Click</button>
    </div>
  )
}

export default ItemListContainer