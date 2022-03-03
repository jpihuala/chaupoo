
import { useState, useEffect } from "react"
import ItemList from "../../components/ItemList.jsx/ItemList"
import getFetch  from "../../helpers/getFetch"


function ItemListContainer( {greeting} )  {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getFetch
    .then((respuesta)=> {
      return respuesta
    })
    .then((resp) => setProductos(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))    
  }, [])
  
  console.log(productos)

  return (
    <>
        {   loading ? <h1> Cargando....</h1>
            :
            <ItemList productos={productos}/>
        }
    </>
  )}

export default ItemListContainer