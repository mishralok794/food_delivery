
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
     <Header /> 

     <Banner />

     <Items />

     <Menu  />
    </div>
  );
}

export default App;
