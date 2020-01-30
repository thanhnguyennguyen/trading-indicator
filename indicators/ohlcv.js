const ccxt = require("ccxt")
const getOHLCV = async (ex, ticker, interval, isFuture = false) => {

    let exchangeId = ex,
        exchangeClass = ccxt[exchangeId]

    let exchange
    if (isFuture) {

        exchange = new exchangeClass({
            options: {
                defaultMarket: 'futures'
            }
        })
    } else {
        exchange = new exchangeClass({})
    }
    return await exchange.fetchOHLCV(ticker, interval)
}
// console.log(getOHLCV("binance", "BTC/USDT", "15m", true))
module.exports = getOHLCV