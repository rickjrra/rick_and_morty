import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App() {
   // console.log(characters)
   return (
      <div className='App'>
         <div>Bienvenidos!!!!</div>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} onClose={() => window.alert('Emulamos que se cierra la card')}/>
      </div>
   );
}

export default App;