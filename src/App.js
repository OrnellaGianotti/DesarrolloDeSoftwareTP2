import './App.css';
import React, { useState } from 'react'; 
import {Entradacontraseña} from './components/Entradacontraseña';
import { Fortalezacontraseña } from './components/Fortalezacontraseña';
import { Copiarcontraseña } from './components/Copiarcontraseña';


function App() {
  const [contraseña, setContraseña] = useState(''); 
  

  return (
    <div className="App">
      <h1>CREA UNA CONTRASEÑA</h1>
      <Entradacontraseña contraseña={contraseña} setContraseña={setContraseña} /> 
      <Fortalezacontraseña contraseña={contraseña} />
      <Copiarcontraseña contraseña={contraseña}/>
    
    </div>
  );
}

export default App;
