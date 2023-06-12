import Card from "./Card";

export default function Cards({characters, onClose}) {
   console.log(characters)
  return (
    <div>
      {
         characters?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={onClose}/>
         })
      }

    </div>
  );
}