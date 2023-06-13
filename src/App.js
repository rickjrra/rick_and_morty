import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';



function App() {

   const [characters, setCharacters] = useState([])
  
  
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
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