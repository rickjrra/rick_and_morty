import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';

import { Routes, useLocation, useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import ErrorNoFunciona from './components/ErrorNoFunciona.jsx';

function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPassword69*';

   function login(inputs) {
      if (inputs.password === PASSWORD && inputs.email === EMAIL) {
         setAccess(true);
         return navigate('/home');
      }
      return alert("no es el usuario")
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function logOut(){
      setAccess(false);
      navigate("/");
   }

   const [characters, setCharacters] = useState([])

   // const [title, setTitle] = useState("Bienvenidos")
   // const seteandoTitle = (str)=>{
   //    setTitle(str)
   // }
  
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((ch)=>ch.id===data.id)
            if(exist){
              alert("ya existe")    
            } else{
              setCharacters((oldChars) => [...oldChars, data]);
            }
           
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      setCharacters((oldChars) => {
         return oldChars.filter((ch)=>ch.id !== id)
      });
   }

   const{pathname} = useLocation();


   return (
      <div className='App'>
         {pathname === "/" ? null: <NavBar logOut={logOut} onSearch ={onSearch} />}
         {/* <h1>{title}</h1> */}
        
         <Routes>
            <Route path='/' element={<Login login={login} />} ></Route>
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}></Route> 
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<ErrorNoFunciona />}></Route>
         </Routes>
         
      </div>
   );
}

export default App;

/*
//seteandoTitle={seteandoTitle} lia 55
*/