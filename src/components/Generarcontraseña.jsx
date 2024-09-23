import "../App.css"; 

export function GenerarContraseña({ setContraseña }) {
    const generarContraseñaAleatoria = () => {
      const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let contraseña = '';
      
      for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[randomIndex];
      }
  
      setContraseña(contraseña);
    };
  
    return (
      <div className="generar-contraseña">
        <button onClick={generarContraseñaAleatoria}>Generar Contraseña Aleatoria</button>
      </div>
    );
  }