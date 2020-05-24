import React from 'react';
import logo from "../../../assets/eyeWalletLogo.svg";
import { Link } from "react-router-dom";

import '../../../../css/register.css'

const RegisterForm = () => {
    return (
        <div id="registerForm"  className="contenedor-form formulario">
            <img src={logo} alt="logo" className="tamano_logo"/>
            <div className="register-form m-t">
                <div className="control m-b m-t">
                    <div className="group">
                        <label className="white">Nombre:</label>
                        <input type="text"  className="input-registro" required />
                    </div>
                </div>
                <div className="control m-b">
                    <div className="group">
                        <label className="white">Correo electronico:</label>
                        <input type="text" className="input-registro" required />
                        
                    </div>
                </div>
                <div className="control m-b">
                    <div className="group">
                        <label className="white">Contraseña:</label>
                        <input type="password" className="input-registro" required />
                       
                    </div>
                </div>
                <div className="control m-b">
                    <div className="group">
                        <label className="white" >Confirmar Contraseña:</label>
                        <input type="password" className="input-registro" required />
                        
                    </div>
                </div>
            </div>
            <br/>
            <div className="buttons-container">
                <div className="buttons">
                    <Link to="/login">
                        <button className="button  is-rounded "><span className="btn-text">INICIAR SESIÓN</span></button>
                    </Link>
                    <Link to="/register">
                        <button className="button is-rounded is-info"><span className="btn-text">REGISTRARSE</span></button>
                    </Link>
                </div>
            </div>
            <br/>
            <p className="policy-text">Al registrarte, aceptas nuestros Términos <span>y Politica de privacidad</span></p>
        </div>
    );
};

export default RegisterForm;
