import {useEffect} from "react";
import './Card.css'


export default function Card({char, onClose, seteandoTitle}) { // obj



   const {id,name,gender,species,origin,image,status} = char

   useEffect(()=>{
      seteandoTitle('jujujujujuju')
   },[])

   useEffect(()=>{
      return function(){
      seteandoTitle('bye bye bye')
      };
   },[]);

   return (
      <div className="cardST">
         <div className='close'><button onClick={()=>onClose(id)}>X</button></div>
         <div className='info'>
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
