const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const macd = async (fastPeriod, slowPeriod, signalPeriod, sourceType, ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let input = {
      values: source[sourceType],
      fastPeriod: fastPeriod,
      slowPeriod: slowPeriod,
      signalPeriod: signalPeriod,
      SimpleMAOscillator: false,
      SimpleMASignal: false,
    }
    const data = indicators.MACD.calculate(input)
    return { ...data, ohlcv : ohlcv}
  } catch (err) {
    throw err
  }
}
module.exports = {
  macd,
}
