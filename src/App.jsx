import './App.css';
import CartWidget from './components/CartWidget.jsx/CartWidget';
import Div from './components/Div.jsx';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import { NavBar } from './components/NavBar/NavBar'
import TituloApp from './components/TituloApp/TituloApp';

function App() {




  return (
    <div>

      {/* <NavBar /> */}

      {/* <ItemListContainer saludo='Hola soy componente contenedor' />
      <Div/> */}

      <ItemCount/>
    </div>
  );
}

export default App;
