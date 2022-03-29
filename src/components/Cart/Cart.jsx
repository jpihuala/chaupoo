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
      const queryCollectionSet = collection(db, 'orders')
      addDoc(queryCollection, orden)
      .then(resp => console.log(resp))
      .catch(err => console.error(err))
      .finally(() => console.log('termino '))
    }



    console.log(cartList)
    return (
      <div>
        cart
        { cartList.map(item => <li key={item.id}>nombre: {item.name} precio: {item.price} cantidad:{item.cantidad}</li>) }
        <button onClick={vaciarCart}>Vaciar Carrito</button>
        <button onClick={generarOrden}>Terminar Compra</button>
      </div>
    )
}

export default Cart