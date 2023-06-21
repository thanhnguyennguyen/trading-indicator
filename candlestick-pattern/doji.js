const { doji } = require('technicalindicators')
const getOHLCV = require('../indicators/ohlcv.js')
const detachSource = require('../indicators/source.js')

const isDoji = async (ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let singleInput = {
      open: source['open'],
      high: source['high'],
      low: source['low'],
      close: source['close'],
    }
    return doji(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isDoji,
}
