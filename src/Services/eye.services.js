import axios from 'axios';
const API = axios.create({
    withCredentials: false,
    baseURL: 'https://eb19.eyewallet.com',
    headers: {
        Authorization: {
            toString() {
                return `Bearer ${localStorage.getItem('user')}`
            }
        }
    }
});

API.interceptors.response.use(function (response) {
    return response;
}, async error => {
    if (error.response.status === 401) { }
    return Promise.reject(error);
});

const user = {
    post: params => API.post('sessions', params),
    get: () => API.get('users'),
};

const wallets = {
    get: () => API.get('wallets')
};

const transactions = {
    post: () => API.post('transactions/send')
};

const changelly = {
    amount: () => API.post('changelly/calculateAmount'),
    min: () => API.post('changelly/minAmount')
};

/*const fee = {
    eth: () => API.get('https://ethgasstation.info/json/ethgasAPI.json'),
    btc: () => axios.get('https://bitcoinfees.earn.com/api/v1/fees/recommended')
};*/

const coin = {
    btc: (wallet) => axios.get(`https://api.blockchair.com/bitcoin/dashboards/address/${wallet}?transaction_details=true`),
    eth: (wallet) => axios.get(`https://api.blockchair.com/ethereum/dashboards/address/${wallet}`),
    ltc: (wallet) => axios.get(`https://api.blockchair.com/litecoin/dashboards/address/${wallet}?transaction_details=true`),
    xrp: (wallet) => axios.get(`https://api.blockchair.com/ripple/raw/account/${wallet}?transactions=true`),
    usdc: (wallet) => axios.get(`https://api.blockchair.com/ethereum/erc-20/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/dashboards/address/${wallet}`),
    bwn: (wallet) => axios.get(`https://api.blockchair.com/ethereum/erc-20/0x51a4F65463597CA4609C9a90eA3D5ab219Fbc85D/dashboards/address/${wallet}`),
    paxos: (wallet) => axios.get(`https://api.blockchair.com/ethereum/erc-20/0x8e870d67f660d95d5be530380d0ec0bd388289e1/dashboards/address/${wallet}`),
    etc: (wallet) => axios.all([
        axios.get(`https://blockscout.com/etc/mainnet/api?module=account&action=eth_get_balance&address=${wallet}`),
        axios.get(`https://blockscout.com/etc/mainnet/api?module=account&action=txlist&address=${wallet}`)
    ]),
    usdt: (wallet) => axios.get(`https://api.blockchair.com/bitcoin/dashboards/address/${wallet}?transaction_details=true&omni=true`),
    xlm: (wallet) => axios.get(`https://api.blockchair.com/stellar/raw/account/${wallet}?operations=true`)
};

export default {
    user,
    wallets,
    transactions,
    changelly,
    coin
}
