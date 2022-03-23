import { BrowserRouter, Route, Routes } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import Container from 'react-bootstrap/esm/Container';
import CartContextProvider from './context/CartContext';






function App() {




  return (
      <CartContextProvider>
      <BrowserRouter>
        <Container>
          <div className='elementos'>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              
            </Routes>
              
          </div>
        </Container>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
