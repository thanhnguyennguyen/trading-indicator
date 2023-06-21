const { bearishengulfingpattern } = require('technicalindicators')
const getOHLCV = require('../indicators/ohlcv.js')
const detachSource = require('../indicators/source.js')

const isBearishEngulfingPattern = async (ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let singleInput = {
      open: source['open'].slice(-2),
      high: source['high'].slice(-2),
      low: source['low'].slice(-2),
      close: source['close'].slice(-2),
    }
    return bearishengulfingpattern(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isBearishEngulfingPattern,
}
