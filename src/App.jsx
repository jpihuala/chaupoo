import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';






function App() {




  return (
    <div>

      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
