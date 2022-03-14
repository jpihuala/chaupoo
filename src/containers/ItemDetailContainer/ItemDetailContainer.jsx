import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import getFetch from '../../helpers/getFetch'

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams ()
    console.log(detalleId)
    useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))

    }, [])
    console.log(producto)
  return (
    <>
        <ItemDetail producto={producto} />

    </>
  )
}

export default ItemDetailContainer