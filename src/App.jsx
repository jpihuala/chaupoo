import './App.css';
import CartWidget from './components/CartWidget.jsx/CartWidget';
import Div from './components/Div.jsx';
import ItemCount from './components/ItemCount/ItemCount';


import { NavBar } from './components/NavBar/NavBar'
import TituloApp from './components/TituloApp/TituloApp';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {




  return (
    <div>

      {/* <NavBar /> */}

      <ItemListContainer/>

      <ItemCount initial={1} stock={10} onAdd />
      
    </div>
  );
}

export default App;
