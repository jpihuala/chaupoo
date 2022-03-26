import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const agregarCart = (item) => {

        setCartList( [ ...cartList, item ] )
    }

    const vaciarCart=()=>{
        setCartList( [])
    }

    const precioTotal =()=>{
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
    }



    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
