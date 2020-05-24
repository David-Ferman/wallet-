import React from "react";
import { components } from "react-select";
import eth from "../containers/assets/crypto/ETH.svg";
import btc from "../containers/assets/crypto/BTC.svg";
import ltc from "../containers/assets/crypto/LTC.svg";
import usdt from "../containers/assets/crypto/USDT.svg";
import paxos from "../containers/assets/crypto/PAXOS.svg";
import bwn from "../containers/assets/crypto/bitwings-01.png";
import etc from "../containers/assets/crypto/ETC.svg";
import xlm from "../containers/assets/crypto/XLM-93.svg";
import xrp from "../containers/assets/crypto/XRP-.svg";
import bitwings from "../containers/assets/crypto/bitwings-01.svg";
import bitUsd from "../containers/assets/crypto/BITUSD.svg";
import dash from "../containers/assets/crypto/DASH.svg";
import cardImg from '../containers/assets/credit-card.png'


const { Option } = components;
export const IconOption = ( props ) => (
    <Option {...props}>
        <img src={props.data.icon} alt={props.data.label} width={20} style={{ marginRight: 10 }}/>
        {props.data.label}
    </Option>
);

const { SingleValue } = components;
export const selectedOption = ( props ) => (
    <SingleValue {...props}>
        <img src={props.data.icon} alt={props.data.label} width={20} style={{ marginRight: 10 }}/>
        {props.data.label}
    </SingleValue>
);


export const fiatCurrency = [
    {
        label: "USD",
        value: 5,
        icon: cardImg
    },
    {
        label: "MXN",
        value: 6,
        icon: cardImg
    },
];

export const cryptoCoinsSelect = [
    { icon: eth, label: 'Ethereum', value: 1, },
    { icon: btc, label: 'Bitcoin', value: 2,  },
    { icon: ltc, label: 'LiteCoin', value: 3, },
    { icon: usdt, label: 'Tether', value: 4,  },
    { icon: paxos, label: 'Paxos', value: 5,  },
    { icon: bwn, label: 'BitWings', value: 6, },
    { icon: etc, label: 'Ethereum-Classic', value: 7},
    { icon: xlm, label: 'Stellar', value: 8,  },
    { icon: xrp, label: 'Monero', value: 9,   },
    { icon: bitwings, label: 'BitWings', value: 10,},
    { icon: bitUsd, label: 'BitUsd', value: 11,},
    { icon: dash, label: 'Dash', value: 12}
];

