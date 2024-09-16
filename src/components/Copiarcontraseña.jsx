import "../App.css"; 
import React, {useState} from 'react';

export function Copiarcontraseña(props) {
    const [mensajeCopiado, setMensajeCopiado] = useState('');
  
    const copiarAlPortapapeles = () => {
      navigator.clipboard.writeText(props.contraseña); 
      setMensajeCopiado('Contraseña copiada'); 
      setTimeout(() => setMensajeCopiado(''), 3000);
    };
  
    return (
      <div className="copiar-contraseña">
        <button onClick={copiarAlPortapapeles}>Copiar Contraseña</button>
        {mensajeCopiado && <p className="mensaje-copiado">{mensajeCopiado}</p>}
      </div>
    );
  }