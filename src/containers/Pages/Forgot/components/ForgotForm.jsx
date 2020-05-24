import React from 'react';
import logo from "../../../assets/eyeWalletLogo.svg";
import { Link } from "react-router-dom";

const ForgotForm = () => {
    return (
        <div className="form-container  ">


            <img src={logo} alt="" className="logo-eye"/>
            <br/>
            <br/>

            <div className="password-container">
                <p className="password-text">Olvidaste tu contraseña? No te preocupes ingresa tu correo electrónico con el que te registraste y
                    nosotros te ayudaremos a reestablecerla</p>
                <div className="control has-icons-right field-margin">
                    <input className="input is-rounded" type="email" placeholder="correo electrónico"/>
                    <span className="icon is-small is-right" style={{ marginRight: '2vh' }}>
                  <i className="fa fa-lock"/>
                </span>
                </div>
                <div className="buttons-container">
                    <div className="buttons">
                        <Link to="/app/home">
                            <button className="button is-rounded is-info "><span className="btn-text">Recuperar Contraseña</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <br/>

                <Link to="/login">
                    <p className="policy-text">Regresar al Login</p>
                </Link>
            </div>
        </div>
    );
};

export default ForgotForm;
