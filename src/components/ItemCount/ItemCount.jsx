import React from 'react'
import { useState } from 'react'



function ItemCount ({initial, stock, onAdd}) {
  const [count, setCount] = useState(initial)
  
  const sumar = () => {
    if (count < stock){
      setCount(count + 1)
    }
  }
  const restar = () => {
    if (count > initial){
      setCount(count - 1)
    }    
  }
  
  const agregar = () => {
    onAdd (count)
    console.log(onAdd)
  }

  return (
    <div>
      <button onClick={sumar}> + </button>
      <label> { count } </label>
      <button onClick= {restar}> - </button>
      <br />
      <button onClick={agregar}>Add to Cart</button>
    </div>
  )
}

export default ItemCount