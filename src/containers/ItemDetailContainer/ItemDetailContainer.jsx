import { doc, getDoc, getFirestore } from 'firebase/firestore'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import getFetch, { getFetchProd } from '../../helpers/getFetch'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams ()
    const [loading, setLoading] = useState(true)
    console.log(detalleId)

    useEffect(() => {
      const db = getFirestore()
      const queryDb = doc(db, 'items', detalleId)
      getDoc(queryDb)
      .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
      .catch(err => console.log(err))
      .finally(() =>setLoading(false))

  },[])

    //     getFetch
    //     .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
    //     .catch (err => console.log(err))
    //     .finally (()=> setLoading(false))
    //     return () => {

    //     }

    // }, [])
    // console.log(producto)
  return (
    <>
        {loading ? 
        <h1> Espere... </h1>  
        :
        <ItemDetail producto={producto} />
        
      }
    </>
  )
}

export default ItemDetailContainer