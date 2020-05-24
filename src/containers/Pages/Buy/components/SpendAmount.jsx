import React from 'react';
import Select from "react-select";
import { IconOption, selectedOption } from "../../../../Helpers/utils";
import bajarIcon from "../../../assets/Iconos/bajar.svg";

const SpendAmountPage = () => {

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

    const placeholder2 = <span> Moneda...</span>;
    const result = '$300000 mxn';
    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "rgb(30,30,30)" ,
          color: "white",
          
        })
      };
    return (
        <div className="contenedor_modeda">
            <div className="hijo_moneda">
            <h1 className="crypto-title">Con</h1>
                            <Select
                            styles={customStyles}
                            isClearable={true}
                            hideSelectedOptions={true}
                            placeholder={placeholder2}
                            options={Currency}
                            components={{
                                Option: IconOption,
                                SingleValue: selectedOption
                            }}/>
            </div>
            <div className="hijo_moneda">
            <h1 className="crypto-title">Pagar</h1>
                    
            <p className="control has-icons-left ">
            <input className="input" type="text" value={result} readOnly={true}/>
            <span className="icon is-small is-left">
            <i className="fa fa-credit-card"/>
            </span>
            </p>
                        
            </div>
            <div className="texto_moneda">
                <p>Nota: Recuerde rellenar los campos para habilitar el proceso de compra.</p>
            </div>
            <div className="hijo_moneda">
            <div onClick={() => alert( "Hello from here" )} className="column ">
                    <img src={bajarIcon} alt="bajar" className="imagen_intercambio"/>
                </div> 
            </div>
        </div>
        /*<div>

            <div className="columns is-desktop exchange-container">
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
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="column">
                        <div className=" box-crypto ">
                            <div className="notify-container noti-mobile">
                                Nota: el monto reflejado aquí es un <br/> estimado del monto a pagar.
                                <div className="is-hidden-desktop">
                                    Nota: Recuerde rellenar todos los campos para habilitar el proceso de
                                    compra.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => alert( "Hello from here" )} className="column ">
                    <img src={bajarIcon} alt="bajar" className="is-bajar"/>
                </div>
            </div>
        </div>*/
    );
};

export default SpendAmountPage;
