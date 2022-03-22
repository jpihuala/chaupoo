import Container from "react-bootstrap/esm/Container"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"



const ItemDetail = ({producto}) => {
  const [ count, setCount] = useState (null)
  const onAdd = cant => {
    console.log(cant)
    setCount(cant)
  }
  
  return (
    <Container>
    <div>
        <h2>{producto.name}</h2>
        <img src={producto.foto} alt='' className='w-50' />
        {producto.name}
        { count ? 
          <Link to='/cart'>
            <button className="btn btn-outline-primary">Ir al Cart</button>
            
            </Link>
         : 
          <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        }
    </div>
    </Container>
  )
}

export default ItemDetail