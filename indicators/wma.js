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
    return await indicators.WMA.calculate(wmaInput)
  } catch (err) {
    throw err
  }
}
module.exports = {
  wma,
}
