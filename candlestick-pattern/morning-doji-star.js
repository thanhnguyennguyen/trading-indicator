const { morningdojistar } = require('technicalindicators')
const getOHLCV = require('../indicators/ohlcv.js')
const detachSource = require('../indicators/source.js')

const isMorningDojiStarPattern = async (ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let singleInput = {
      open: source['open'].slice(-4, -1),
      high: source['high'].slice(-4, -1),
      low: source['low'].slice(-4, -1),
      close: source['close'].slice(-4, -1),
    }
    return morningdojistar(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
    isMorningDojiStarPattern,
}
