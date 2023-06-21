const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const bb = async (bbLength, stdDev, sourceType, ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let input = {
      values: source[sourceType],
      period: bbLength,
      stdDev: stdDev,
    }
    return await indicators.BollingerBands.calculate(input)
  } catch (err) {
    throw err
  }
}
module.exports = {
  bb,
}
