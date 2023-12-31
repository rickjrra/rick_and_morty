import React, { useState } from 'react';
import { } from 'react-router-dom';
import './Login.css';


const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function Login({login}) {

  const[inputs, setInputs]= useState({
    email:"",
    password:"",
  });
  const[inputsErrors, setInputsErrors]= useState({
    email:"",
    password:"",
  });

  // const navigate = useNavigate();

  const validate = (inputs)=>{
    const errors = {};
    if (!inputs.email) errors.email = "Email is null";
    if (inputs.email.length < 6) errors.email = "Email contain 6 characters";
    if (!regExEmail.test(inputs.email)) errors.email = "Email Will be Email";
    if (!regExPassword.test(inputs.password)) errors.password = "Password ... ";
    if (inputs.password.length < 6) errors.password = "Password must contain 6 characters";
    if (!inputs.password) errors.password = "Password is null";
    return errors;
  }

  const handleChange = (event)=>{
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setInputsErrors(validate({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  };

const handleSubmit = (event)=>{
  event.preventDefault();
  let aux = Object.keys(inputsErrors)
  if(aux.length === 0){
    setInputs({
      email:"",
      password:"",
    });
    setInputsErrors({
      email: "",
      password: "",
    });

    login(inputs)
    // navigate("/home")
  }else{
    return alert("Error")
  }
}

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <img src='https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs3.abcstatics.com%2Fmedia%2Fcapitulos%2F000%2F212%2F918%2Frick-dobles-mi-mortijer-y-yo-1.jpg&nuevoancho=690&medio=abcg' alt='rick_and_morty' />
        <h1>Bienvenidos</h1>
          <label>Email: </label>
            <input type="text" key="email" name="email" value={inputs.email} onChange={handleChange} ></input>
             <span>{inputsErrors?.email && inputsErrors.email }</span>
              <hr></hr>
          <label>Password: </label>
            <input type="password" key="password" name="password" value={inputs.password} onChange={handleChange}></input>
             <span>{inputsErrors?.password && inputsErrors.password }</span>
               <hr></hr>
               {Object.keys(inputsErrors).length === 0 ?(
                  <button type="submit">Ingresar</button>
               ) : null}
                
                  
        </form>
    </div>
  )
}
