const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const mfi = async (mfiPeriod, ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let mfiInput = {
      high: source['high'],
      low: source['low'],
      close: source['close'],
      volume: source['volume'],
      period: mfiPeriod,
    }
    const data = indicators.MFI.calculate(mfiInput)
    return { ...data, ohlcv : ohlcv}
  } catch (err) {
    throw err
  }
}
module.exports = {
  mfi,
}
