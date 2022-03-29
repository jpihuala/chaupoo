import { useState } from "react"
import { 
  addDoc, 
  collection, 
  doc, 
  documentId, 
  getDocs, 
  getFirestore, 
  query, 
  updateDoc, 
  where, 
  writeBatch 
} from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import Container from "react-bootstrap/esm/Container"
import { Link } from "react-router-dom"


function Cart() {
    const [dataFomr, setDataFomr] = useState()

    const { cartList, vaciarCart, precioTotal } = useCartContext()

    const generarOrden= async ()=>{  
      let orden = {}      

      orden.buyer = { name: 'Josue', phone: '2222222', email: 'josue@pihuala.com.ar' }
      orden.total = precioTotal();

      orden.items = cartList.map(cartItem => {
          const id = cartItem.id;
          const nombre = cartItem.name;
          const precio = cartItem.price * cartItem.cantidad;
          
          return {id, nombre, precio}   
      })
      console.log(orden)


      
      const db = getFirestore()
      const queryColection = collection(db, 'orders')
      addDoc(queryColection, orden)
      .then(resp => console.log(resp))
      .catch(err => console.error(err))
      .finally(() => console.log('termino '))
    }



    console.log(cartList)
    return (
      <Container>

          <div className="card">
            <div className="row">
              <h2>Estado de Carrito</h2>
              <img className='w-50' />
              { cartList.map(item => <li key={item.id}> <br/>
              Nombre: {item.name} <br/> 
              Precio: {item.price} <br/>
              Cantidad:{item.cantidad}</li>) }
              <button className="btn btn-outline-primary btn-block" onClick={vaciarCart}>Vaciar Carrito</button>
              <button className="btn btn-outline-primary btn-block" onClick={generarOrden}>Terminar Compra</button>
              </div>
          </div>
      </Container>
    )
}

export default Cart