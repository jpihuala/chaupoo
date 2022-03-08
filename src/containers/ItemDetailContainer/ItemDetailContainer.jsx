import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import getFetch from '../../helpers/getFetch'

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})

    useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === 1)))

    }, [])
    console.log(producto)
  return (
    <>
        <ItemDetail producto={producto} />

    </>
  )
}

export default ItemDetailContainer