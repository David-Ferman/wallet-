import React from 'react';
import Select from "react-select";
import bajarIcon from "../../../assets/Iconos/bajar.svg";
import { IconOption, selectedOption } from '../../../../Helpers/utils' ;

class BuyAmountPage extends React.Component {
    render() {


        const Currency = [
            {
                label: "USD",
                value: 5,
                img: "https://icons-for-free.com/iconfiles/png/512/card+credit+card+debit+card+master+card+icon-1320184902079563557.png"
            },
            {
                label: "MXN",
                value: 6,
                img: "https://icons-for-free.com/iconfiles/png/512/card+credit+card+debit+card+master+card+icon-1320184902079563557.png"
            },
        ];

        const Coins = [
            {
                label: "BTC",
                value: 1,
                img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Bitcoin-BTC-icon.png"
            },
            { label: "ETH", value: 2, img: "https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png" },
            { label: "WAVES", value: 3, img: "https://cdn.iconscout.com/icon/free/png-256/waves-27-646005.png" },
            {
                label: "RIPPLE",
                value: 4,
                img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/512/Ripple-icon.png"
            },
        ];

        const placeholder1 = <span> Activo digital...</span>;
        const placeholder2 = <span> Moneda...</span>;
        const result = '$300000 mxn';

        return (

            <div style={{marginTop:18}} className="columns is-desktop exchange-container">
                <div className="column">
                    <h1 className="crypto-title">Comprar</h1>
                    <div className=" box-crypto ">
                        <Select
                            isClearable={true}
                            hideSelectedOptions={true}
                            placeholder={placeholder1}
                            options={Coins}
                            components={{
                                Option: IconOption,
                                SingleValue: selectedOption
                            }}/>
                    </div>
                </div>
                <div className="column">
                    <h1 className="crypto-title">Con</h1>
                    <div className=" box-crypto money-width">
                        <Select
                            isClearable={true}
                            hideSelectedOptions={true}
                            placeholder={placeholder2}
                            options={Currency}
                            components={{
                                Option: IconOption,
                                SingleValue: selectedOption
                            }}/>
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <h1 className="crypto-title">Pagar</h1>
                        <div className=" box-crypto ">
                            <p className="control has-icons-left ">
                                <input className="input" type="text" value={result} readOnly={true}/>
                                <span className="icon is-small is-left">
                                                        <i className="fa fa-credit-card"/>
                                            </span>
                            </p>
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
                <div onClick={() => alert( "Hello from here" )} className="column ">
                    <img src={bajarIcon} alt="bajar" className="imagen_intercambio"/>
                </div>
            </div>
        );
    }
}

export default BuyAmountPage;
