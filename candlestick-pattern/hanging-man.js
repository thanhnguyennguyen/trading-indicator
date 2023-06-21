const { hangingman } = require('technicalindicators')
const getOHLCV = require('../indicators/ohlcv.js')
const detachSource = require('../indicators/source.js')

const isHangingManPattern = async (ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let singleInput = {
      open: source['open'].slice(-6, -1),
      high: source['high'].slice(-6, -1),
      low: source['low'].slice(-6, -1),
      close: source['close'].slice(-6, -1),
    }
    return hangingman(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
    isHangingManPattern,
}
