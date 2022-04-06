const ccxt = require('ccxt')
const ticker = async (ex, ticker, isFuture = false) => {
  try {
    let exchangeId = ex,
      exchangeClass = ccxt[exchangeId]

    let exchange
    if (isFuture) {
      exchange = new exchangeClass({
        options: {
          defaultMarket: 'future',
        },
      })
    } else {
      exchange = new exchangeClass({})
    }
    return await exchange.fetchTicker(ticker)
  } catch (err) {
    throw 'Ticker is not supported'
  }
}
module.exports = {
  ticker,
}
