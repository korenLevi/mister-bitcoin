import axios from "axios"

export const BitcoinService = {
    getRate,
}

const BC_API = 'https://blockchain.info/tobtc?currency=USD&value='

function getRate(coins) {
    if(!coins) return
    return axios.get(BC_API + coins)
    .then(res =>res.data)
}

function getMarketPrice() {

}

function getConfirmedTransactions() {

}