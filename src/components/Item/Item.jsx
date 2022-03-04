import React from 'react'
import alpha from '../../Img/alpha.jpeg'

function Item({prod}) {
  return (
            <div key={prod.id} className='col-md-4'>                        
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.name} - ${prod.categoria}`}
                    </div>
                    <div className="card-body">
                        <img src={prod.foto} alt='' className='w-50' />{prod.price}                                                            
                    </div>
                    <div className="card-footer">
                            <button className="btn btn-outline-primary btn-block">
                                Combo Chaupoo
                            </button>                                              
  
                                                                                    
                    </div>
                </div>
            </div>

  )
}

export default Item