import "../App.css"
import React, {useState} from 'react'; 


export function Entradacontraseña({ contraseña, setContraseña }) {
    const [mostrarContraseña, setMostrarContraseña] = useState(false);

  // Función para alternar la visibilidad de la contraseña
  const toggleMostrarContraseña = () => {
    setMostrarContraseña(prevMostrar => !prevMostrar);
  };

    return (
        <div className="entrada-contraseña">
        <label htmlFor="contraseña" className="label-contraseña">Contraseña: </label>
        <input
          id="contraseña"
          type={mostrarContraseña ? 'text' : 'password'} // Cambia entre 'text' y 'password'
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          placeholder="Ingrese su contraseña"
          className="input-contraseña"
        />
        <button type="button" onClick={toggleMostrarContraseña} className="boton-mostrar-contraseña">
          {mostrarContraseña ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>
    );
  }

