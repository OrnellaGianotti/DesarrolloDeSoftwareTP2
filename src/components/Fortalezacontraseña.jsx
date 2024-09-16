import "../App.css";

export function Fortalezacontraseña({ contraseña }) {
  const validarContraseña = (contraseña) => {

    if (!contraseña) return '';
    
    if (contraseña.length < 6) return 'Contraseña poco segura';
    if (!/[A-Z]/.test(contraseña) && !/[!@#$%^&*]/.test(contraseña)) {
      if (/^[a-z0-9]+$/.test(contraseña)) return 'Contraseña poco segura';
    }

    
    if (contraseña.length >= 6 && /^[a-z0-9]+$/.test(contraseña)) {
      return 'Contraseña segura';
    }

    
    if (contraseña.length > 8 &&
        /[A-Z]/.test(contraseña) &&
        /[a-z]/.test(contraseña) &&
        /[0-9]/.test(contraseña) &&
        /[!@#$%^&*]/.test(contraseña)) {
      return 'Contraseña muy segura';
    }

    // Si no cumple con ninguna de las reglas específicas
    return 'Contraseña segura';
  };

  const mensaje = validarContraseña(contraseña);

  return (
    <div className="validacion-contraseña">
      <p>{mensaje}</p>
    </div>
  );
}
