const ccxt = require("ccxt")
const fetchTicker = async (ex, ticker, isFuture = false) => {

    let exchangeId = ex,
        exchangeClass = ccxt[exchangeId]

    let exchange
    if (isFuture) {

        exchange = new exchangeClass({
            options: {
                defaultMarket: 'future'
            }
        })
    } else {
        exchange = new exchangeClass({})
    }
    return await exchange.fetchTicker(ticker)
}
module.exports = fetchTicker