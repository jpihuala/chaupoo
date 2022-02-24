import React from 'react';
import CartWidget from '../CartWidget.jsx/CartWidget';
import TituloApp from '../TituloApp/TituloApp';
import './NavBar.css'

const NavBar= () => {
    return(
        <div>
            <TituloApp/>
            <CartWidget/>
            <ul >
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="">Productos</a>
                    <ul>
                    <li><a href="./views/shampoo.html">Shampoo </a></li>
                    <li><a href="./404.html">Serum</a></li>
                    </ul>
                </li>    
                <li><a href="https://www.instagram.com/chaupootienda/" target="_blank">Instagram</a> </li>
                <li><a href="https://www.facebook.com/chaupootienda/" target="_blank">Facebook</a></li>
                <li><a href="./views/tienda.html">Tienda</a></li>
                <li><a href="./views/contacto.html">Contacto</a></li>
            </ul>
            <img src="" alt="" />
        </div>
    )
}

export { NavBar }