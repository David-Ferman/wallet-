import React from 'react';
import axios from 'axios';
import Select from "react-select";
import { IconOption, selectedOption, fiatCurrency } from "../../../../Helpers/utils";
import { send } from "../../../../Services/user.service";

class SendComponent extends React.Component {

    state = {
        selectedOption: {},
        currency: {
            priceUsd: ''
        },

    };

    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
        );
    };

    getPrice = () => {
        const coin = localStorage.getItem( 'coinName' );
        axios.get( `https://api.coincap.io/v2/assets/${coin}` )
            .then( res => {
                const currency = res.data.data;
                this.setState( { currency } );
                // console.log(currency);
            } );
    };


    componentDidMount() {

        //this.getPrice()

    }

    handleSubmit = (e) =>{
        e.preventDefault();

    };

    render() {

        const addressRef = React.createRef();
        const amountRef = React.createRef();


        return (
            <form onSubmit={this.handleSubmit}>
                <div className="cotizacion_data">
                <div className="address">
                <label className="m-r ancho_componente_chico" >Dirección</label>
                    <input ref={addressRef}  type="text" className="input-value m-r opacidad_input ancho_componente_grande" placeholder="No olvides chequear la dirección"/>
                </div>
                <div className="address">
                    <label className="m-r ancho_componente_chico visibles" ></label>
                        <button className="m-r botton_formato" >
                            Scan QR
                        </button>
                        <button className="m-r botton_formato" >
                            Pegar
                        </button>
                </div>
                </div>
                <div className="cotizacion_data">
                <div className="address">
                <label className="m-r ancho_componente_chico">Monto</label>
                <input ref={amountRef} className="input-value m-r opacidad_input ancho_componente_grande" type="text" placeholder="No olvides chequear la dirección"/>
                </div>
                <div className="address">
                    <label className="m-r ancho_componente_chico">Con</label>
                    <div className="custom-select-width m-r">
                        <Select
                            className="ancho_componente_mediano"
                            isClearable={true}
                            hideSelectedOptions={true}
                            placeholder='Selecciona'
                            options={fiatCurrency}
                            value={selectedOption}
                            onChange={this.handleChange}
                            components={{
                                Option: IconOption,
                                SingleValue: selectedOption
                            }}/>
                    </div>
                    <input className="input-value m-r opacidad_input ancho_componente_mediano"  type="text"
                           value='0.00' readOnly={true}/>
                </div>
                </div>
                <div className="cotizacion_data">
                <div className="address">
                <label className="m-r ancho_componente_chico">Fee</label>
                    <div  className="input-value m-r opacidad_input ancho_componente_grande" type="text"
                            readOnly={true}>{this.state.currency.priceUsd}
                    </div>
                </div>
                </div>
                
                <button className="botton_formato_envio"
                            onClick={() => {
                                send( addressRef.current.value, amountRef.current.value, () => this.setState( { loading: false } ) );
                                this.setState( { loading: true } );
                }}>Enviar</button>
            </form>
        );
    }
}

export default SendComponent;
