import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'



function Item({prod}) {
    return (
        <div key={prod.id} className='col-md-4'>                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.name} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.image} alt='' className='w-50' /> <br/> 
                    <h1>{prod.price}</h1>                                                            
                </div>
                <div className="card-footer">
                        <Link to={`detalle/${prod.id}`}>
                            <button className="btn btn-outline-primary btn-block">
                                Detalle del Producto
                            </button>                                              
                        </Link>
                        {/* <ItemCount initial={1} stock={10}/> */}
                </div>
            </div>
        </div>

    )
}

export default Item