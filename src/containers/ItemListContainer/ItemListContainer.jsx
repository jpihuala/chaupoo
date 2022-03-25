import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemCount from "../../components/ItemCount/ItemCount"
import ItemList from '../../components/ItemList/ItemList'
import  getFetch  from "../../helpers/getFetch"

import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore"


function ItemListContainer( {greeting} )  {
    const [productos, setProductos] = useState([])
    const [producto, setProducto ] = useState({})
    const [loading, setLoading] = useState(true)
    const [bool, setBool] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        if (categoriaId) {
            const queryColection = collection(db, 'items')
            const queryFilter = query( queryColection, where('categoria', '==', categoriaId)  )
            getDocs(queryFilter)
            .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
        }else{
            const queryColection = collection(db, 'items')
            getDocs(queryColection)
            .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))             
        }

    }, [categoriaId])
    const handleClick=(e)=>{
      e.preventDefault() 
      setBool(!bool)
  }

  const handleAgregar=()=>{
      setProductos([
          ...productos,
          { id: "8", name: "Gorra 7", foto: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 2 }
      ])
  }

  console.log(productos)
  return (
      <>
          <h1>{ greeting }</h1>
          <button onClick={handleClick}>Cambiar estado </button>           
          <button onClick={handleAgregar}>Agregar Item </button>           
          
          {   loading ? <h1>Cargando...</h1>
              :
              <ItemList productos= {productos} />                
              
          }
          {/* <ItemCount initial = {1} stock = {10} onAdd={ onAdd } /> */}
          
      </>
  )}
export default ItemListContainer
