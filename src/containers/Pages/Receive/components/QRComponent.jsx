import React from 'react';
import QRCode from 'qrcode.react';
import eth from '../../../assets/crypto/ETH.png';
import btc from '../../../assets/crypto/BTC.png';
import ltc from '../../../assets/crypto/LTC.png';
import usdt from '../../../assets/crypto/USDT.png';
import paxos from '../../../assets/crypto/PAXOS.png';
import bwn from '../../../assets/crypto/bitwings-01.png';
import etc from '../../../assets/crypto/ETC.png';
import xlm from '../../../assets/crypto/XLM-93.png';
import xrp from '../../../assets/crypto/XRP-.png';

class QRComponent extends React.Component {

    coins = {
        eth,
        btc,
        ltc,
        usdt,
        paxos,
        bwn,
        etc,
        xlm,
        xrp
    };

    render() {
        const { wallet } = this.props;

        if( !wallet )
            return (<div>Loading...</div>);

        return (
            
            <div className="qr_elemento">
                <div className="caja-qr">
                <QRCode value={wallet.address + ''}/>
                <h1>Dirección de Wallet</h1>
                <b>{wallet.address}</b>
                </div>
            </div>
        );
    }
}

export default QRComponent;
