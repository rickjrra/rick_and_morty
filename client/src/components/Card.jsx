//import {useEffect} from "react";
import './Card.css'
import { Link } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { addFav, removeFav  } from '../redux/actions/actions';
import { useEffect, useState } from 'react';




function Card({char, onClose, seteandoTitle, addFav, removeFav, myFavorites}) { // obj
// const dispatch = useDispatch ()
// dispatch(addFav({}))

const {id,name,gender,species,origin,image,status} = char


const [isFav, setIsFav] = useState(false);

function handleFavorite(){
   if(isFav){
      setIsFav(false)
      removeFav(id)
   }else{
      setIsFav(true)
      addFav(char)
   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === char.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className="cardST">
         {isFav ? (
            <div className='close'><button onClick={handleFavorite}>❤️</button></div>
         ) : (
            <div className='close'><button onClick={handleFavorite}>🤍</button></div>
         )}
         <div className='close'><button onClick={()=>onClose(id)}>X</button></div>
         <div className='info'>
         <Link to={`/detail/${id}`} >
         <h3 className="card-name">{name}</h3>
         </Link>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin?.name}</h2>
         <img src={image} alt={name} />       
         
         </div>
      </div>
   );
}

function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}

function mapDispatchToProps(dispatch){
   return{
      addFav: (ch)=> dispatch(addFav(ch)),
      removeFav: (id)=> dispatch(removeFav(id)),
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)



   // useEffect(()=>{
   //    seteandoTitle('jujujujujuju')
   // },[])

   // useEffect(()=>{
   //    return function(){
   //    seteandoTitle('bye bye bye')
   //    };
   // },[]);