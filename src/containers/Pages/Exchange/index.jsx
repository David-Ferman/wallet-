import React from 'react';
import Select from "react-select";
import cohete from "../../assets/Iconos/cohete.svg";
import cambiar from "../../assets/Iconos/cambiar.svg";
import enviarIconoVerde from "../../assets/Iconos/recibir-verde.svg";
import { IconOption, selectedOption, fiatCurrency, cryptoCoinsSelect } from "../../../Helpers/utils";
import { connect } from "react-redux";
class ExchangePage extends React.Component {
    render() {
        const wallets = this.props.monedas;
        const placeholder1 = <span> Activo digital</span>;
        const placeholder2 = <span> Moneda</span>;
        const result = '$300000 mxn';
        const customStyles = {
            control: (base, state) => ({
              ...base,
              background: "rgb(30,30,30)" ,
              color: "white",
              
            })
          };

        return (
            <div className="componente_primario  padding ">
                 <h1>Exchange Bitcoin</h1>

                <div className="comonentes_vender m-r-c" >
                    <div className="div_vender" >
                        <h1  >Vender</h1>
                            <div className="m-t">
                            <select name="select" className="monedas_select ">
                            <option  >Activo digital</option>
                                {
                                Object.keys(wallets).map(data=>(
                                <option key={data} defaultValue={wallets[data].currency}>{wallets[data].currency}</option>
                                ))
                                }
                                
                                    
                                </select>
                            </div>
                        
                    </div>
                    <div className="div_vender" >
                        <h1  >Con</h1>
                            <div className="m-t" >
                            <Select
                            styles={customStyles}
                             isClearable={true}
                            hideSelectedOptions={true}
                            placeholder={placeholder2}
                            options={fiatCurrency}
                            components={{Option: IconOption,SingleValue: selectedOption}}/>
                            </div>
                    </div>
                    <div className="div_vender" >
                        <h1 >Pagar</h1>
                                    <div className="ancho_componente_total m-t" >
                                        <p className="control has-icons-left ">
                                            <input className="input opacidad_input" type="text" value={result} readOnly={true}/>
                                            <span className="icon is-small is-left">
                                                        <i className="fa fa-credit-card"/>
                                            </span>
                                        </p>
                                    </div>
                                  
                    </div>
                    <div className="elementos_circulos div_vender">
                                <button onClick={() => {}} className="circulo color_fondo m-r-1">
                                        20%
                                </button>
                                <button onClick={() => {}} className="circulo color_fondo m-r-1">
                                        50%
                                </button>
                                <button onClick={() => {}} className="circulo color_fondo m-r-1">
                                        75%
                                </button>
                                <button onClick={() => {}} className="circulo color_fondo">
                                        All
                                </button> 
                    </div>

                </div>

                
                <div className="network_contenedro m-r-c">
                    <div className="network_div">
                    <h1 >Fee</h1>
                                    <div className="boton_intercambio m-t" >
                                        <button className="b_normal color_fondo white" >
                                            Normal
                                        </button>
                                        <button className="b_normal" >
                                            High
                                        </button>
                                        <p>Network fee : 0.14$</p>
                                    </div>
                    </div>
                    <div className="network_div_fila fila">
                                            <div >
                                            <h1 >Comprar</h1>
                                            <Select
                                            styles={customStyles}
                                            className="ancho_componente_mediano m-t"
                                                placeholder={placeholder1}
                                                options={cryptoCoinsSelect}
                                                components={{
                                                    Option: IconOption,
                                                    SingleValue: selectedOption
                                                }}/>
                                            </div>
                                            <img src={cambiar} alt="cambiar" className="imagen_intercambio" />     
                    </div>
               
                </div>
                <div className="monto_contenedor" >
                    
                <p>El monto que recibes es final, incluyendo asi el Fees y es garantizado por el Exchange.</p>
                    
                    
                    <div className="contenedor_recibe m-t" >
                        <div >
                            <img src={cohete} alt="cohete" className="imagen_intercambio" />
                        </div>
                        <div className="fila" >
                            <img src={enviarIconoVerde} alt="verde" className="imagen_intercambio"/>
                            <div >
                                <p>Tu recibes</p>
                                <p>2.000 BTC</p>
                                <p>este monto esta sujeto a Fees</p>
                            </div>
                        </div>
                        <div >
                            <button className="botton_formato" >Continuar</button>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
           /* <div className="column ">
                <section className="hero hero-exchange is-black-wallet is-medium">
                    <div className="general-exchange-container">
                        <h1>
                            Exchange Bitcoin
                        </h1>
                        <br/>
                        <div className="columns is-desktop exchange-container">
                            <div className="column">
                                <h1 className="crypto-title">Vender</h1>
                                <div className=" box-crypto ">
                                    <div className="custom-select-width">
                                    <Select
                                        isClearable={true}
                                        hideSelectedOptions={true}
                                        placeholder={placeholder1}
                                        options={cryptoCoinsSelect}
                                        components={{
                                            Option: IconOption,
                                            SingleValue: selectedOption
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <h1 className="crypto-title">Con</h1>
                                <div className=" box-crypto money-width">
                                    <div className="custom-select-width">
                                    <Select
                                        isClearable={true}
                                        hideSelectedOptions={true}
                                        placeholder={placeholder2}
                                        options={fiatCurrency}
                                        components={{
                                            Option: IconOption,
                                            SingleValue: selectedOption
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <h1 className="crypto-title">Pagar</h1>
                                <div className=" box-crypto ">
                                    <div className="control">
                                        <p className="control has-icons-left ">
                                            <input className="input" type="text" value={result} readOnly={true}/>
                                            <span className="icon is-small is-left">
                                                        <i className="fa fa-credit-card"/>
                                            </span>
                                        </p>
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
                            <div className="percentage-buttons">
                                <div onClick={() => {}} className="column ">
                                    <button className="button is-btn-circle ">
                                        20%
                                    </button>
                                </div>
                                <div onClick={() => {}} className="column ">
                                    <button className="button is-btn-circle ">
                                        50%
                                    </button>
                                </div>
                                <div onClick={() => {}} className="column ">
                                    <button className="button is-btn-circle ">
                                        75%
                                    </button>
                                </div>
                                <div onClick={() => {}} className="column ">
                                    <button className="button is-btn-circle ">
                                        ALL
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="columns notify-container is-hidden-touch">
                            Nota: Recuerde rellenar todos los campos para habilitar el proceso de compra.
                        </div>
                        <br/> <br/>



                        <div className="columns">
                            <div className="column">
                                <h1 className="crypto-title">Fee</h1>
                                <div className=" box-crypto ">
                                    <div className="buttons buttons-fee">
                                        <button className="button is-black button-fee ">
                                            Normal
                                        </button>
                                        <button className="button button-fee ">
                                            High
                                        </button>
                                        <p>Network fee : 0.14$</p>
                                    </div>
                                </div>
                            </div>

                            <div className="column">
                                <h1 className="crypto-title">Comprar</h1>
                                <div className=" box-crypto ">
                                    <div className="buttons buttons-fee">
                                        <div className="select-coin-fee">
                                            <div className="custom-select-width">
                                            <Select
                                                placeholder={placeholder1}
                                                options={cryptoCoinsSelect}
                                                components={{
                                                    Option: IconOption,
                                                    SingleValue: selectedOption
                                                }}/>
                                            </div>
                                        </div>

                                        <img src={cambiar} alt="cambiar" className="cambiar-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bottom-container">
                    <section className="matching-text-container">
                        <p style={{marginTop:20}}><small>El monto que recibes es final, incluyendo asi el Fees y es garantizado por el
                            Exchange.</small>
                        </p>
                    </section>
                    <br/>
                    <section>
                        <div className="level  rocket-container ">
                            <div className="level-item  ">
                                <img src={cohete} alt="cohete" className="rocket-img"/>
                            </div>
                            <div className="level-item has-text-centered">
                                <img src={enviarIconoVerde} alt="verde"/>
                                <div className="text-start">
                                    <p>Tu recibes</p>
                                    <p><b>2.000 BTC</b></p>
                                    <p>este monto esta sujeto a Fees</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <button className="button is-primary text-button ">Continuar</button>
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

//export default ExchangePage;
const mapsStateToProps=state=>({monedas:state.users.monedas })
export default connect(mapsStateToProps) (ExchangePage);
