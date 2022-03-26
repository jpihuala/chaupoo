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
          { id: "7", name: "Kit Total", foto: 'https://chaupoo.com.ar/wp-content/uploads/2020/06/468de20f-3370-40c7-862f-5dbfb17d4050.jpg', categoria: "kit" , price: 4000 }
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
