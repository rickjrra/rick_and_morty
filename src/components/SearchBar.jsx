import { useState } from 'react';
import './SearchBar.css'


export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   function handleChange(event){
      setId(event.target.value);
   }
   const randomChar = () =>{
      
   }
   return (
      <div className='sea'>
         <input onChange={handleChange} type='search' name ='search' value={id}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
         <button onClick={() => randomChar(id)}>RandomS</button>
      </div>
   );
}
