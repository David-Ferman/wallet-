import React from 'react';
import '../../../css/admin.css'
import '../../../css/custom.css'
import '../../../css/divider.css'
import mastercardIcon from '../../assets/Iconos/mastercard.svg'
import recibirVerdeIcon from '../../assets/Iconos/recibir-verde.svg'
import enviarRojoIcon from '../../assets/Iconos/enviar-rojo.svg'

import Tabs from './components/Tabs';
import Tab from './components/Tab';

import BuyAmountPage from "./components/BuyAmount";
import SpendAmountPage from "./components/SpendAmount";


class BuyPage extends React.Component {
    render() {

        return (
            <div className="componente_primario color_fondo padding">
                <h1>
                Buy Bitcoin <b>BTC</b>
                </h1>
                <Tabs >
                        
                            <Tab iconClassName={'fa fa-headphones'}
                                 linkClassName={'custom-link'} buttonName={'Monto a Gastar'}>
                                <br/>
                                <SpendAmountPage/>
                            </Tab>
                            <Tab iconClassName={'fa fa-headphones'}
                                 linkClassName={'custom-link'} buttonName={'Monto a Comprar'}>
                                <BuyAmountPage/>
                            </Tab>
                            
                </Tabs>
              <div className="componente_master">
                <div >
                        <h1><b>Matching offers found</b></h1>
                        <div>el monto que recibes puede diferir de la oferta que ves ahora, debido a las fluctuaciones del mercado
                        </div>
                </div>
                  <div className="contenido_master">
                    <div>
                    <img src={mastercardIcon} alt="mastercardIcon" className="imagen_intercambio"/>
                    </div>
                    <div className="boton_master">
                    <img src={recibirVerdeIcon} alt="verde" className="imagen_intercambio"/>
                                <div className="text-start">
                                    <p>Tu recibes</p>
                                    <p><b>2.000 BTC</b></p>
                                    <small>Este monto esta sujeto a cambios</small>
                                </div>
                    </div>
                    <div className="boton_master">
                    <img src={enviarRojoIcon} alt="rojo" className="imagen_intercambio"/>
                                <div className="text-start">
                                    <p>Tu envias</p>
                                    <p><b>2.000 BTC</b></p>
                                </div>
                    </div>
                    <div>
                    <button className="botton_formato ">Comprar</button>
                    </div>
                  </div>
              </div>
            </div>
            /*
            <div className="column ">
                <section className="hero is-medium buy-container">
                    <div className="coin-container">
                        <h1>
                            Buy Bitcoin <b>BTC</b>
                        </h1>
                        <br/>
                        <Tabs>
                            <Tab iconClassName={'fa fa-headphones'}
                                 linkClassName={'custom-link'} buttonName={'Monto a Gastar'}>
                                <br/>
                                <SpendAmountPage/>
                            </Tab>
                            <Tab iconClassName={'fa fa-headphones'}
                                 linkClassName={'custom-link'} buttonName={'Monto a Comprar'}>
                                <BuyAmountPage/>
                            </Tab>
                        </Tabs>
                        <br/>
                        <div className="columns notify-container is-hidden-touch">
                            Nota: Recuerde rellenar todos los campos para habilitar el proceso de compra.
                        </div>
                    </div>
                </section>

                <div className="bottom-container">
                    <section className="matching-text-container">
                        <h1><b>Matching offers found</b></h1>
                        <div className="sub-title">el monto que recibes puede diferir de la oferta que ves ahora, debido a
                            las
                            fluctuaciones del mercado
                        </div>
                    </section>
                    <section className="level-section bottom-buy-wrapper">
                        <div className="level  level-container  ">
                            <div className="level-item has-text-centered">
                                <img src={mastercardIcon} alt="mastercardIcon"/>
                            </div>
                            <div className="level-item has-text-centered padding-5">
                                <img src={recibirVerdeIcon} alt="verde"/>
                                <div className="text-start">
                                    <p>Tu recibes</p>
                                    <p><b>2.000 BTC</b></p>
                                    <small>Este monto esta sujeto a cambios</small>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <img src={enviarRojoIcon} alt="rojo"/>
                                <div className="text-start">
                                    <p>Tu envias</p>
                                    <p><b>2.000 BTC</b></p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <button className="button is-primary text-button ">Comprar</button>
                            </div>
                        </div>
                    </section>
                    <div className="is-divider divider-content"/>
                    <br/>
                    <div className="container">
                        <div className="remember-text">
                            Recuerde que una vez realizada la compra
                        </div>
                        <div className="remember-text margin-bottom-5">
                            no puede alterar el producto.
                        </div>
                    </div>
                </div>
            </div>*/
        );
    }
}


export default BuyPage;
