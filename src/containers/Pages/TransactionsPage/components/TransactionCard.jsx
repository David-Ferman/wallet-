import React from 'react';
import moment from "moment";
import * as PropTypes from "prop-types";
import eth from "../../../assets/crypto/ETH.svg";
import btc from "../../../assets/crypto/BTC.svg";
import ltc from "../../../assets/crypto/LTC.svg";
import usdt from "../../../assets/crypto/USDT.svg";
import paxos from "../../../assets/crypto/PAXOS.svg";
import bwn from "../../../assets/crypto/bitwings-01.png";
import etc from "../../../assets/crypto/ETC.svg";
import xlm from "../../../assets/crypto/XLM-93.svg";
import xrp from "../../../assets/crypto/XRP-.svg";
import bitwings from "../../../assets/crypto/bitwings-01.svg";
import bitUsd from "../../../assets/crypto/BITUSD.svg";
import dash from "../../../assets/crypto/DASH.svg";
import exchange from '../../../assets/Iconos/Exchange.svg';

class TransactionCard extends React.Component {


    render() {
        let { transactions, currency, loading } = this.props;

        const noInfo =
            <div className='no-info-wrapper'>
                <img src={exchange} alt="no imagen" style={{width:50,marginTop:-12}}/>
                You dont have transactions yet
            </div>;


        if( loading )
            return (
                <div className='loading-wrapper-tdc'>
                    <div className="loader-line positioning">
                        <div className="loader--dot"/>
                        <div className="loader--dot"/>
                        <div className="loader--dot"/>
                        <div className="loader--dot"/>
                        <div className="loader--dot"/>
                        <div className="loader--dot"/>
                        <div className="loader--text"/>
                    </div>
                </div> );

        const coins = {
            eth: { icon: eth, label: 'Ethereum', explorerUrl: 'etherscan.io/tx/'},
            btc: { icon: btc, label: 'Bitcoin', explorerUrl: 'blockchain.com/btc/tx/'},
            ltc: { icon: ltc, label: 'LiteCoin', explorerUrl: 'live.blockcypher.com/ltc/tx/'},
            usdt: { icon: usdt, label: 'Tether', explorerUrl: ''},
            paxos: { icon: paxos, label: 'Paxos', explorerUrl: ''},
            bwn: { icon: bwn, label: 'BitWings', explorerUrl: ''},
            etc: { icon: etc, label: 'Ethereum-Classic', explorerUrl: 'etcblockexplorer.com/tx/'},
            xlm: { icon: xlm, label: 'Stellar', explorerUrl: ''},
            xrp: { icon: xrp, label: 'Monero', explorerUrl: ''},
            bitwings: { icon: bitwings, label: 'BitWings', explorerUrl: ''},
            usdc: { icon: bitUsd, label: 'BitUsd', explorerUrl: ''},
            dash: { icon: dash, label: 'Dash', explorerUrl: ''},
        };
        const selectedCurrency = localStorage.getItem( 'currency' ) || 'btc';

        const url = `${coins[selectedCurrency].explorerUrl}` ;

        return (
            <React.Fragment>
                {transactions.length > 0 ? transactions.map( ( transaction, index ) => (
                    <div className="" key={index}>
                        <div className="card custom-card ">
                            <header className="card-header amount-card-title">
                                <p style={{ marginLeft: 50 }}>

                                </p>
                            </header>
                            <div className="card-content ">
                                <div className="content transaction-row">
                                    <div className="">
                                        {moment( transaction.timestamp ).format( "HH:mm A" )}
                                        <span
                                            style={{ marginLeft: 10 }}>{moment( transaction.timestamp ).format( "MMM, Do YYYY" )}</span>
                                    </div>

                                    <div className="wallet-address">
                                        <a href={`https://${url}${transaction.hash}`} target='_blank' rel="noopener noreferrer"
                                           className='hash-link'>{transaction.hash}</a>
                                    </div>
                                    <div
                                        className={transaction.type === 'deposit'
                                            ? 'transaction-value color-green'
                                            : 'transaction-value color-red'}>
                                        {transaction.type === 'deposit'
                                            ? <div>
                                                <span className="icon-wrapper fa fa-arrow-circle-up"/>
                                                {transaction.value}
                                                {currency.toUpperCase()}
                                            </div>
                                            : <div>
                                                <span className="icon-wrapper fa fa-arrow-circle-down"/>
                                                {transaction.value}
                                                {currency.toUpperCase()}
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) ) : noInfo}
            </React.Fragment>
        );
    }
}

TransactionCard.propTypes = {
    transactions: PropTypes.any,
    currency: PropTypes.any
}

export default TransactionCard;
