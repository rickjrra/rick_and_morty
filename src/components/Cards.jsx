import './Cards.css'
import Card from "./Card";

export default function Cards({characters, onClose, seteandoTitle}) {
   console.log(characters)
  return (
    <div className='cardsST'>
      {
         characters?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={onClose} seteandoTitle={seteandoTitle}/>
         })
      }

    </div>
  );
}