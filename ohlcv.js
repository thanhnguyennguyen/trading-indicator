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
    console.log("Exchange: ", exchange.id, ". Ticker: ", ticker, ". Interval: ", interval, ". OHLCV", await exchange.fetchOHLCV(ticker, interval, undefined, 10))
}
// getOHLCV("binance", "BTC/USDT", "15m", true)
module.exports = getOHLCV

