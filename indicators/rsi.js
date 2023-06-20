const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const rsi = async (rsiLength, sourceType, ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let rsiInput = {
      values: source[sourceType],
      period: rsiLength,
    }
    const data = indicators.RSI.calculate(rsiInput)
    return { ...data, ohlcv : ohlcv}
  } catch (err) {
    throw err
  }
}
module.exports = {
  rsi,
}
