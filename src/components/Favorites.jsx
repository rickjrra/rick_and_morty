import './Cards.css'
import React from 'react'
import Card from './Card'
import {connect, useDispatch, useSelector} from 'react-redux'
import { removeFav, orderCards, filterCards } from '../redux/actions/actions'



export default function Favorites({ onClose}) {
    const {myFavorites} = useSelector((state)=> state)
    const dispatch = useDispatch()
    function closeFavorite(id){
        onClose(id);
       dispatch(removeFav(id));
    }

function handleOrder(e){
    e.preventDefault()
    const {name, value} = e.target
    dispatch(orderCards(value))
}

function handleFilter(e){
    e.preventDefault()
    const {name, value} = e.target
    dispatch(filterCards(value))
}

  return (
    <div className='cardsST'>.
        
        <select onChange={handleOrder} name='order' defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>Select Order</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter} name='filter' defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>Select Order</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        {
        myFavorites?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={()=>closeFavorite(char.id)}/>
         })
        }
    </div>
  )
}





// function mapState (st){
//     return{
//         myFavorites: st.myFavorites,
//     }
// }
// function mapDispatch(d){
//     return{
//         removeFav: (id)=>d(removeFav(id))
//     }
// }

// export default connect(mapState, mapDispatch)(Favorites)