import axios from "axios"

export const BitcoinService = {
    getRate,
    getMarketPrice
}

const BC_API = 'https://blockchain.info/tobtc?currency=USD&value='

function getRate(coins) {
    if(!coins) return
    return axios.get(BC_API + coins)
    .then(res =>res.data)
}

function getMarketPrice() {
const crypro = require('../data/market-price-new.json')
console.log('crypro',crypro);
return crypro
}

function getConfirmedTransactions() {

}