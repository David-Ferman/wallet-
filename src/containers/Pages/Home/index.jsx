import React from 'react';

import Select from 'react-select';
import { components } from 'react-select';

import '../../../css/admin.css'
import '../../../css/custom.css'
import '../../../css/divider.css'
//import tdcIcon from '../../assets/Iconos/TDC.svg'
import bajarIcon from '../../assets/Iconos/bajar.svg'
import mastercardIcon from '../../assets/Iconos/mastercard.svg'
import recibirVerdeIcon from '../../assets/Iconos/recibir-verde.svg'
import enviarRojoIcon from '../../assets/Iconos/enviar-rojo.svg'


class HomePage extends React.Component {
    render() {


        const Currency = [
            { label: "USD", value: 5, img:"https://icons-for-free.com/iconfiles/png/512/card+credit+card+debit+card+master+card+icon-1320184902079563557.png" },
            { label: "MXN", value: 6, img:"https://icons-for-free.com/iconfiles/png/512/card+credit+card+debit+card+master+card+icon-1320184902079563557.png" },
        ];

        const Coins = [
            { label: "BTC", value: 1, img:"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Bitcoin-BTC-icon.png"},
            { label: "ETH", value: 2, img:"https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png" },
            { label: "WAVES", value: 3, img:"https://cdn.iconscout.com/icon/free/png-256/waves-27-646005.png" },
            { label: "RIPPLE", value: 4, img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/512/Ripple-icon.png"},
        ];

        const { Option } = components;
        const IconOption = (props) => (
            <Option {...props}>
                <img src={props.data.img} alt="" width={20}/>
                {props.data.label}
            </Option>
        );
        const placeholder1 = <span> Activo digital...</span>;
        const placeholder2 = <span> Moneda...</span>;
        const result = '$300000 mxn';


        return (
            <div className="column ">
                <section className="hero is-black-wallet is-medium">
                    <div className="coin-container">
                        <h1>
                            Buy Bitcoin <b>BTC</b>
                        </h1>
                        <br/>
                        <div className="buttons">
                            <button className="button gastar-button text-button">Monto a Gastar</button>
                            <button className="button comprar-button text-button">Monto a Comprar</button>
                        </div>
                        <br/>
                        <div className="columns is-desktop exchange-container">
                            <div className="column">
                                <h1 className="crypto-title">Comprar</h1>
                                <div className=" box-crypto ">
                                    <Select
                                        placeholder={placeholder1}
                                        options={Coins}
                                        components={{ Option: IconOption }}/>
                                </div>
                            </div>
                            <div className="column">
                                <h1 className="crypto-title">Con</h1>
                                <div className=" box-crypto money-width">
                                    <Select
                                        placeholder={placeholder2}
                                        options={Currency}
                                        components={{ Option: IconOption }}/>
                                </div>
                            </div>
                            <div className="column">
                                <div className="column">
                                    <h1 className="crypto-title">Pagar</h1>
                                    <div className=" box-crypto ">
                                        <div className="control">
                                            <input className="input" type="text" value={result} readOnly />
                                        </div>
                                        <div className="notify-container noti-mobile">
                                            Nota: el monto reflejado aquí es un estimado del monto a pagar.
                                            <div className="is-hidden-desktop">
                                                Nota: Recuerde rellenar todos los campos para habilitar el proceso de
                                                compra.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => alert("Hello from here")} className="column ">
                                <img src={bajarIcon} alt="bajar" className="is-bajar"/>
                            </div>
                        </div>
                        <div className="columns notify-container is-hidden-touch">
                            Nota: Recuerde rellenar todos los campos para habilitar el proceso de compra.
                        </div>
                    </div>
                </section>
                <section className="matching-text-container">
                    <h1><b>Matching offers found</b></h1>
                    <div className="subtitle">el monto que recibes puede diferir de la oferta que ves ahora, debido a
                        las
                        fluctuaciones del mercado
                    </div>
                </section>
                <section className="level-section">
                    <div className="level is-black-wallet level-container  ">
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
        );
    }
}


export default HomePage;
