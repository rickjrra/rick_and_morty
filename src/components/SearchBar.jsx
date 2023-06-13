import './SearchBar.css'
export default function SearchBar(props) {
   return (
      <div className='sea'>
         <input type='search' />
         <button onClick={()=>props.onSearch(321)}>Agregar</button>
      </div>
   );
}
