import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import NavBar from './components/Nav';
import characters, { Rick } from './data.js';

function App() {
   function onSearch(characterID){
      window.alert(characterID);
   }
   // console.log(characters)
   return (
      <div className='App'>
         <div>Bienvenidos!!!!</div>
         <NavBar onSearch ={onSearch} />
         <Cards characters={characters} onClose={() => window.alert('Emulamos que se cierra la card')}/>
      </div>
   );
}

export default App;