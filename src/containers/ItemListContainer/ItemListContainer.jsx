
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList.jsx/ItemList"
import getFetch  from "../../helpers/getFetch"


function ItemListContainer( {greeting} )  {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoriaId} = useParams()
  
  useEffect(() => {
    if (categoriaId) {
      getFetch
      .then((respuesta)=> {
        return respuesta
      })
      .then((resp) => setProductos( resp.filter(pro => pro.categoria=== categoriaId) ))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))       
    }else{
      getFetch
      .then((respuesta)=> {
        return respuesta
      })
      .then((resp) => setProductos(resp))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))    

    }
    
  }, [categoriaId])
  
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