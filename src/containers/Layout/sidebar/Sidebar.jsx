import React from 'react';
import { Link } from "react-router-dom";
import walletIcon from '../../assets/Iconos/Wallet.svg'
import settingsIcon from '../../assets/Iconos/settings.svg'
import bannerImage from '../../assets/banner-img.svg'
import supportIcon from '../../assets/Iconos/support.svg'
import appStoreLogo from '../../assets/app_store.svg'
import googleStoreLogo from '../../assets/google_store.svg'
import { userService } from "../../../Services/user.service";

class Sidebar extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            balance: 0,
            currency: ''
        };
        userService.balance( localStorage.getItem( "user" ),  ).then( balance => {
            this.setState( { balance: balance, currency: localStorage.getItem('currency')} )
        } );
    }



    render() {
        return (
                <aside className="aside_monedero contenedor-aside">
                    <div className="borde_inferior " >
                    <div className="aside_porcentaje_opt">
                    <p className="letra_pequena">Total Amount</p>
                    <p className="letra_pequena">{this.state.balance} {(this.state.currency)}</p> 
                    </div>
                    
                    </div>
                    <div className="opciones_slide">
                    <ul className="aside_opt">
                    <li><img src={walletIcon} alt="mas"/><Link to="/app/soon" className="letra_mediana white">Wallet Settings</Link></li>
                    <li><img src={settingsIcon} alt="mas" /><Link to="/app/settings" className="letra_mediana white">Settings</Link></li>
                    <li><img src={supportIcon} alt="mas" /><Link to="/app/soon" className="letra_mediana white">Soporte</Link></li>
                    </ul>
                    <div className="imagen_sidebar">
                    <img className="is-pulled-right" src={bannerImage} alt="bannerPhoto" style={{ width: '15rem' }}/> <br/>
                    <div className="botones_descarga">
                    <a href="https://apps.apple.com/co/app/eyewallet/id1338756423"
                                                   target='_blank' rel='noopener noreferrer'>
                                                    <img src={appStoreLogo} alt="applogo" className="img_descarga"/>
                                                </a>
                                                <a href="https://play.google.com/store/apps/details?id=com.eyewallet.io&hl=es_MX"
                                                   target='_blank' rel='noopener noreferrer'>
                                                    <img src={googleStoreLogo} alt="googlelogo"
                                                         className="img_descarga"/>
                                                </a>
                    </div>
                    
                    </div>
                    </div>
                </aside>
                
            /*<div className="column is-3  ">
                <aside className="menu is-hidden-mobile">
                    <section className="hero is-balance welcome is-small">
                        <div className="hero-body">
                            <div className="container ">
                                <h6>
                                    Total Amount
                                </h6>
                                <h1><b>{this.state.balance} {(this.state.currency).toUpperCase()}</b></h1>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <ul className="menu-list container-menu-list-first">
                        <li><Link to="/app/soon"><span><img src={masIcon} alt="mas" style={{ width: '15px' }}/></span>Add
                            Account</Link>
                        </li>
                        <li><Link to="/app/soon"><span><img src={masIcon} alt="mas" style={{ width: '15px' }}/></span>Add
                            Legacy
                            Account</Link></li>
                    </ul>
                    <div className="is-divider" style={{ color: 'black' }}/>
                    <div className="container side-bar-bg">
                        <ul className="menu-list container-menu-list">
                            <li><Link to="/app/soon"><span><img src={walletIcon} alt="mas"
                                                                style={{ width: '15px' }}/></span>Wallet
                                Settings</Link></li>
                            <li><Link to="/app/settings"><span><img src={settingsIcon} alt="mas" style={{ width: '15px' }}/></span>
                                Settings</Link></li>
                            <li><Link to="/app/soon"><span><img src={supportIcon} alt="mas" style={{ width: '15px' }}/></span>
                                Soporte</Link></li>

                        </ul>
                        <div className="banner-container">
                            <div className="columns">
                                <div className="column ">
                                    <img className="is-pulled-right" src={bannerImage} alt="bannerPhoto"
                                         style={{ width: '15rem' }}/> <br/>
                                    <div className="container banner-padding">
                                        <p className="margin-top-5">¡Descarga nuestra aplicación!</p>
                                        <br/>
                                        <p className="banner-text">Ten el control de tus activos digitales desde la
                                            comodidad de tu dispositivo móvil. Descarga la aplicación web desde la
                                            tienda de aplicaciónes de tu preferencia</p>
                                        <br/>
                                        <br/>
                                    </div>
                                    <div className="container banner-padding-buttons">
                                        <div className="columns">
                                            <div className="column">
                                                <a href="https://apps.apple.com/co/app/eyewallet/id1338756423"
                                                   target='_blank' rel='noopener noreferrer'>
                                                    <img src={appStoreLogo} alt="applogo" className="app-store-logo"/>
                                                </a>
                                                <a href="https://play.google.com/store/apps/details?id=com.eyewallet.io&hl=es_MX"
                                                   target='_blank' rel='noopener noreferrer'>
                                                    <img src={googleStoreLogo} alt="googlelogo"
                                                         className="app-store-logo"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copy-text">© 2019 <span>Exchange By LabSatoshi</span></div>
                    </div>
                </aside>
                <nav className="mobile">
                <ul className="mobile__items">
                <li className="mobile__item">Recipes</li>
                <li className="mobile__item">More</li>
                </ul>
                </nav>

                
            </div>*/
        );
    }
}


export default Sidebar;
