import React from 'react';
import SendComponent from "./components/SendComponent";

const SendPage = () => {
    const  currency  = localStorage.getItem('currency') || 'BTC';
    return (
        /*<div>
            <section className="section receive-container">
                <div className="container ">
                    <h1> <b>Send {currency.toUpperCase()}</b></h1>
                    <br/>
                    <SendComponent/>
                </div>
            </section>
            <div className="bottom-container"/>
        </div>*/
        <div className="componente_primario color_fondo">
            <h1> <b>Send {currency.toUpperCase()}</b></h1>
            <SendComponent/>
        </div>
    );
};

export default SendPage;
