export default class Core {

    setCoin(coin) {
        this.coin = coin;
    }

    format(data, address) {
        switch (this.coin) {
            case 'btc':
            case 'ltc':
            case 'usdt':
                return this.formatBitcoinChains(data.data['data'][address]);
            case 'eth':
                return this.formatEthereumChains(data.data['data'][address.toLowerCase()], address);
            case 'etc':
                return this.formatEthereumClassicChains(data, address);
            case 'usdc':
                return this.format6DecChains(data.data['data'][address.toLowerCase()], address);
            case 'bwn':
            case 'paxos':
                return this.format18DecChains(data.data['data'][address.toLowerCase()], address);
            case 'xlm':
                return this.formatXLMChains(data.data[address], address);
            case 'xrp':
                return this.formatXRPChains(data.data['data'][address], address);
            default: break;
        }
    }

    fee(amount) {

    }

    formatBitcoinChains(data) {
        let _temp = [];
        data['transactions'].forEach((transaction) => {
            _temp.push({
                type: transaction['balance_change'] > 0
                    ? 'deposit'
                    : 'withdrawal',
                value: Math.abs(transaction['balance_change']) / 1e8,
                hash: transaction['hash'],
                confirmed: transaction['block_id'] > 0,
                date: Date.parse(transaction['time'])
            })
        });
        return {
            balance: data['address']['balance'] / 1e8,
            txs: _temp,
            utxos: data['utxo']
        };
    }

    formatEthereumChains(data, address) {
        let _temp = [];
        data['calls'].forEach((transaction) => {
            _temp.push({
                type: transaction['sender'] !== address.toLowerCase()
                    ? 'deposit'
                    : 'withdrawal',
                value: transaction['value'] / 1e18,
                hash: transaction['transaction_hash'],
                confirmed: true,
                date: Date.parse(transaction['time'])
            })
        });
        return {
            balance: parseFloat(data['address']['balance']) / 1e18,
            txs: _temp
        };
    }

    formatEthereumClassicChains(data, address) {
        let _temp = [];
        data[1].data['result'].forEach((transaction) => {
            _temp.push({
                type: transaction['from'] !== address.toLowerCase()
                    ? 'deposit'
                    : 'withdrawal',
                value: transaction['value'] / 1e18,
                hash: transaction['hash'],
                confirmed: true,
                date: this._toDateTime(transaction['timeStamp'])
            })
        });
        return {
            balance: parseInt(data[0].data['result'], 16) / 1e18,
            txs: _temp
        };
    }

    format6DecChains(data, address) {
        let _temp = [];
        data['transactions'].forEach((transaction) => {
            _temp.push({
                type: transaction['sender'] !== address.toLowerCase()
                    ? 'deposit'
                    : 'withdrawal',
                value: transaction['value'] / 1e6,
                hash: transaction['transaction_hash'],
                confirmed: true,
                date: Date.parse(transaction['time'])
            })
        });
        return {
            balance: parseFloat(data['address']['balance']) / 1e6,
            txs: _temp
        };
    }

    format18DecChains(data, address) {
        let _temp = [];
        data['transactions'].forEach((transaction) => {
            _temp.push({
                type: transaction['sender'] !== address.toLowerCase()
                    ? 'deposit'
                    : 'withdrawal',
                value: transaction['value'] / 1e18,
                hash: transaction['transaction_hash'],
                confirmed: true,
                date: Date.parse(transaction['time'])
            })
        });
        return {
            balance: parseFloat(data['address']['balance']) / 1e18,
            txs: _temp
        };
    }

    formatXLMChains(data, address) {
        let _temp = [];
        data['operations'].forEach((transaction) => {
            let create = transaction['type'] === 'create_account';
            if (transaction['type'] === 'create_account' ||
                transaction['type'] === 'payment') {
                _temp.push({
                    type: transaction['source_account'] === address
                        ? 'deposit'
                        : 'withdrawal',
                    value: create
                        ? parseFloat(transaction['starting_balance'])
                        : parseFloat(transaction['amount']),
                    hash: create
                        ? transaction['transaction_hash']
                        : transaction['hash'],
                    confirmed: transaction['transaction_successful'],
                    date: Date.parse(transaction['created_at'])
                })
            }
        });
        return {
            balance: parseFloat(data['account']['balances'][0]['balance']),
            txs: _temp
        };
    }

    formatXRPChains(data, address) {
        let _temp = [];
        data['transactions']['transactions'].forEach((transaction) => {
            _temp.push({
                type: transaction['tx']['Destination'] === address
                    ? 'deposit'
                    : 'withdrawal',
                value: parseFloat(transaction['tx']['Amount']) / 1e6,
                hash: transaction['tx']['hash'],
                confirmed: true,
                date: this._toDateTime(transaction['tx']['date'])
            })
        });
        return {
            balance: parseFloat(data['account']['account_data']['Balance']) / 1e6,
            txs: _temp
        };
    }

    getCoin() {
        switch (this.coin) {
            case 'btc':
                return 'Bitcoin';
            case 'eth':
                return 'Ethereum';
            case 'ltc':
                return 'Litecoin';
            case 'etc':
                return 'Ethereum Classic';
            case 'xrp':
                return 'Ripple';
            case 'xlm':
                return 'Stellar';
            case 'usdt':
                return 'Tether';
            case 'usdc':
                return 'USD Coin';
            case 'bwn':
                return 'Bitwings';
            case 'paxos':
                return 'Paxos';
            default:
                return this.coin;
        }
    }

    _toDateTime(secs) {
        var t = new Date(2000, 1, 1);
        t.setSeconds(secs);
        return t;
    }

    _flipHexString(hexValue, hexDigits) {
        var h = hexValue.substr(0, 2);
        for (var i = 0; i < hexDigits; ++i) {
          h += hexValue.substr(2 + (hexDigits - 1 - i) * 2, 2);
        }
        return h;
      }
      
      
      _hexToFloat(hex) {
        var s = hex >> 31 ? -1 : 1;
        var e = (hex >> 23) & 0xFF;
        return s * (hex & 0x7fffff || 0x800000) * 1.0 / Math.pow(2, 23) * Math.pow(2, (e - 127))
      }


}