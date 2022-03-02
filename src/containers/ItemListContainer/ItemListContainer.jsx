
const task = new Promise ((res, rej)=>{
  let url = 'pihuala.com.ar'
  if (url === 'pihuala.com.ar') {
    res('200 ok')
  } else{
    rej('400 not found')
  }
})

function ItemListContainer() {
  task
  .then((respuesta) => {
    throw new Error ('esto es un error')
    console.log(respuesta)
  })
    
  .catch(err => console.log(err))

  return (
    <div>
      
      ItemListContainer
      
    </div>
  )
}

export default ItemListContainer