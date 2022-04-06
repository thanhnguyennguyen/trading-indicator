const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const obv = async (ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let obvInput = {
      close: source['close'],
      volume: source['volume'],
    }
    return await indicators.OBV.calculate(obvInput)
  } catch (err) {
    throw err
  }
}
module.exports = {
  obv,
}
