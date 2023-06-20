const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const wma = async (wmaLength, sourceType, ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let wmaInput = {
      values: source[sourceType],
      period: wmaLength,
    }
    const data = await indicators.WMA.calculate(wmaInput)
    return { ...data, ohlcv : ohlcv}
  } catch (err) {
    throw err
  }
}
module.exports = {
  wma,
}
