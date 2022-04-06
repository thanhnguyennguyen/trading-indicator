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
    return await indicators.MFI.calculate(mfiInput)
  } catch (err) {
    throw err
  }
}
module.exports = {
  mfi,
}
