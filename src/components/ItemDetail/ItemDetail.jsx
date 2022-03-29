import Container from "react-bootstrap/esm/Container"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


const ItemDetail = ({producto}) => {
  const [ count, setCount] = useState (null)
  const {agregarCart, cartList} = useCartContext()

  const onAdd = cant => {
    console.log(cant)
    setCount(cant)
    agregarCart({...producto, cantidad: cant})
  }
  
  return (
    <Container>
    <div className="item-detail">
        <h2>{producto.name}</h2>
        <img src={producto.image} alt='' className='w-50' /> <br/>
        <h2>{producto.name}</h2>
        { count ? 
          <Link to='/cart'>
            <button className="btn btn-outline-primary">Ir al Carrito</button>
            
            </Link>
        : 
          <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        }
    </div>
    </Container>
  )
}

export default ItemDetail