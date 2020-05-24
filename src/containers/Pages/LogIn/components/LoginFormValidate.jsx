import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../../assets/eyeWalletLogo.svg";
import ToggleSwitch from '../../../Components/ToggleSwitch'
import { login } from '../../../../redux/actions/userActions'
import { FormErrors } from "../../../../constants/FormErrors";

class LoginFormValidate extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            loading: false,
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'inválido';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' debe tener mínimo 6 caracteres';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'is-danger');
    }


    render() {
        const emailRef = React.createRef();
        const passwordRef = React.createRef();



        return (
            <div className="contenedor-form formulario">
                <img src={logo} alt="" className="tamano_logo"/>
                <div className="login-title">SmartWallet</div>
                <div className="subtitle">Descentralizado y en frio</div>
                <p>¡Bienvenido de nuevo!</p>
                <p>Por favor iniciar sesión en su cuenta</p>
                <br/>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    login( emailRef.current.value, passwordRef.current.value, this.props.history, ()=>this.setState({loading:false}));
                    this.setState({ loading: true });
                }}>
                <div className="control has-icons-right field-margin m-b">
                    <input className={`input is-rounded ${this.errorClass(this.state.formErrors.email)}`} type="email" placeholder="Nombre de Usuario" ref={emailRef}
                           name="email" onChange={this.handleUserInput}/>
                    <span className="icon is-small is-right " style={{ marginRight: '2vh' }}>
                  <i className={!this.state.formErrors.email? "fa fa-user has-text-info" : 'fa fa-user has-text-danger'}/>
                </span>
                </div>
                <div className="control has-icons-right field-margin">
                    <input className={`input is-rounded ${this.errorClass(this.state.formErrors.password)}`} type="password" placeholder="Contraseña" ref={passwordRef}
                           name="password" onChange={this.handleUserInput}/>
                    <span className="icon is-small is-right" style={{ marginRight: '2vh' }}>
                  <i className={!this.state.formErrors.password? "fa fa-lock has-text-info" : 'fa fa-lock has-text-danger'}/>
                </span>
                </div>
                        <FormErrors  formErrors={this.state.formErrors} />
                <br/>
                <div className="remember-data">
                    <div className="field">
                        <ToggleSwitch id="rememberData" Text="si" Small={true}
                                      onChange={() => console.log( 'switch clickead' )}/>
                        <label htmlFor="switchRoundedInfo" style={{ marginLeft: 5 }}> Recordar mis datos</label>
                    </div>
                    <Link to="#">
                        <p>Olvide mi contraseña</p>
                    </Link>
                </div>
                <div className="">
                    <div className="">
                        <button
                        
                            disabled={!this.state.formValid}
                            className={this.state.loading === true ? " azul button is-info is-rounded is-loading" : ' azul button is-info is-rounded '}>
                            <span className="btn-text">INICIAR SESIÓN</span>
                        </button>
                        {/*<Link to="/register">
                        <button className="button is-rounded " ><span className="btn-text">REGISTRARSE</span>
                        </button>
                        </Link>*/}
                    </div>
                </div>
                </form>
                <br/>
                <p className="policy-text">Al registrarte, aceptas nuestros Términos <span>y Politica de privacidad</span></p>
            </div>

        )
    }
}

export default LoginFormValidate;
