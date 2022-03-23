import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import getFetch from '../../helpers/getFetch'

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams ()
    const [loading, setLoading] = useState(true)
    console.log(detalleId)

    useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
        .catch (err => console.log(err))
        .finally (()=> setLoading(false))
        return () => {

        }

    }, [])
    console.log(producto)
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