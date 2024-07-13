import React from "react";
import './LoginSignup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeScripts } from './scripts';

const LoginSignup = () => {
  
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google'; // Cambia la URL según sea necesario
  };

  return (
    <div className="container main">
      <div className="row">
        <div className="col-md-6 side-image"></div>
        <div className="col-md-6 right">
          <div className="input-box">
            <header>Inicia sesión</header>
            <div id="loginNotification" className="alert d-none" role="alert"></div>
            <form className="needs-validation" noValidate id="loginForm">
              <div className="input-field">
                <input type="email" className="form-control" id="email" required autoComplete="off" placeholder=" " />
                <label htmlFor="email">Correo Electrónico</label>
                <div className="invalid-feedback">
                  Ingresa un correo válido.
                </div>
              </div>
              <div className="input-field">
                <input type="password" className="form-control" id="password" minLength="8" required placeholder=" " />
                <label htmlFor="password">Contraseña</label>
                <div className="invalid-feedback">
                  La contraseña debe tener al menos 8 caracteres.
                </div>
              </div>
              <button type="submit" className="btn btn-primary" id="toast-button">Iniciar Sesión</button>
            </form>
            <hr />
            <button className="btn btn-danger" onClick={handleGoogleLogin}>
              Iniciar sesión con Google
            </button>
            <div className="signin">
              <span>¿No tienes una cuenta? <a href="/Registro">Regístrate aquí</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
