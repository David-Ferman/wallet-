import React from 'react';
import {NavLink} from "react-router-dom";

import transacciones from '../../assets/Iconos/transacciones.svg';
import exchange from '../../assets/Iconos/Exchange.svg';
import tdc from '../../assets/Iconos/TDC.svg';
import buy from '../../assets/Iconos/Buy.svg';
import enviar from '../../assets/Iconos/enviar.svg';
import recibir from '../../assets/Iconos/Recibir.svg';
import salida from '../../assets/Iconos/salida.svg';

import logoBlack from '../../assets/logo/logoBlack.svg';

// import bch from '../../assets/crypto/BCH.svg';
import bitUsd from '../../assets/crypto/BITUSD.svg';
import bitwings from '../../assets/crypto/bitwings-01.svg';
import btc from '../../assets/crypto/BTC.svg';
import dash from '../../assets/crypto/DASH.svg';
import etc from '../../assets/crypto/ETC.svg';
import eth from '../../assets/crypto/ETH.svg';
import ltc from '../../assets/crypto/LTC.svg';
// import monero from '../../assets/crypto/MONERO.svg';
import paxos from '../../assets/crypto/PAXOS.svg';
import usdt from '../../assets/crypto/USDT.svg';
import xlm from '../../assets/crypto/XLM-93.svg';
import xrp from '../../assets/crypto/XRP-.svg';
import { logout } from "../../../redux/actions/userActions";
import bwn from "../../assets/crypto/bitwings-01.png";

import { connect } from "react-redux";
import {Monedas} from '../../../redux/actions/userActions';


class TopBar extends React.Component {

  


    componentDidMount() {
        this.props.Monedas();
    }
    render() {
        const coins = {
            eth: { icon: eth, label: 'Ethereum' },
            btc: { icon: btc, label: 'Bitcoin' },
            ltc: { icon: ltc, label: 'LiteCoin' },
            usdt: { icon: usdt, label: 'Tether' },
            paxos: { icon: paxos, label: 'Paxos' },
            bwn: { icon: bwn, label: 'BitWings' },
            etc: { icon: etc, label: 'Ethereum-Classic' },
            xlm: { icon: xlm, label: 'Stellar' },
            xrp: { icon: xrp, label: 'Monero' },
            bitwings: { icon: bitwings, label: 'BitWings' },
            usdc: { icon: bitUsd, label: 'BitUsd' },
            dash: { icon: dash, label: 'Dash' },
        };
        const selectedCurrency = localStorage.getItem( 'currency' ) || 'btc';
        const wallets = this.props.monedas;
        return (
            <nav className="barra">
<div className="barra_contenido">
<img src={logoBlack} alt="Logo" width="112" height="28" className="animacion"/>

<div className="dropdown is-hoverable">
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
    <img src={coins[selectedCurrency].icon} alt="btc" style={{ height: '20px' }}/> <span
    className="navbar-coin-text">{coins[selectedCurrency].label}</span>
    </button>
    </div>
    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
    <div className="dropdown-content">
    {wallets != null ? wallets.map( wallet => (
    <a href='?' key={wallet.currency} onClick={() => {
    localStorage.setItem( 'currency', wallet.currency );
    }} className="navbar-item">
    <img src={coins[wallet.currency].icon} alt={wallet.currency} className="navbar-coin" style={{ height: '20px' }}/> <span
    className="navbar-coin-text">{coins[wallet.currency].label}</span>
    </a> )): ''}                       
    </div>
    </div>
    </div>
    <NavLink to="/app/transactions" className="opt visible white" activeClassName="active" >
    <img src={transacciones} alt="transaccionesimg" className="img_opt" />
    <p >Transacciones</p>
    </NavLink>
    <NavLink to="/app/exchange" className="opt visible white" activeClassName="active">
    <img src={exchange} alt="transaccionesimg " className="img_opt"  />
    <p >Exchange</p>
    </NavLink>
    <NavLink to="/app/tdc" className="opt visible white" activeClassName="active">
    <img src={tdc} alt="transaccionesimg" className="img_opt" />
    <p >TDC</p>
    </NavLink>
    <NavLink to="/app/buy" className="opt visible white" activeClassName="active">
    <img src={buy} alt="transaccionesimg" className="img_opt" />
    <p >Comprar</p>
    </NavLink>
    <NavLink to="/app/send" className="opt visible white" activeClassName="active">
    <img src={enviar} alt="transaccionesimg " className="img_opt"/>
    <p >Enviar</p>
    </NavLink>
    <NavLink to="/app/receive" className="opt visible white" activeClassName="active">
    <img src={recibir} alt="transaccionesimg" className="img_opt" />
    <p>Recibir</p>
    </NavLink>
    <NavLink to="/login"className="opt visible white" activeClassName="active" onClick={() => logout()}>
    <img src={salida} alt="transaccionesimg" className="img_opt" />
    <p >Salida</p>
    </NavLink>
    </div>
</nav> 
        );
    }
}

//export default TopBar;
const mapsStateToProps=state=>({monedas:state.users.monedas })
export default connect(mapsStateToProps,{Monedas}) (TopBar);
