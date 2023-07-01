import './Cards.css'
import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import { removeFav } from '../redux/actions/actions'


 function Favorites({myFavorites, onClose, removeFav}) {
    function closeFavorite(id){
        onClose(id)
        removeFav(id)
    }
  return (
    <div className='cardsST'>{
        myFavorites?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={()=>closeFavorite(char.id)}/>
         })
        }
    </div>
  )
}
function mapState (st){
    return{
        myFavorites: st.myFavorites,
    }
}
function mapDispatch(d){
    return{
        removeFav: (id)=>d(removeFav(id))
    }
}

export default connect(mapState, mapDispatch)(Favorites)