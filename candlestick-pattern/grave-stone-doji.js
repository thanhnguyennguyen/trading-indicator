const { gravestonedoji } = require('technicalindicators')
const getOHLCV = require('../indicators/ohlcv.js')
const detachSource = require('../indicators/source.js')

const isGraveStoneDojiPattern = async (ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let singleInput = {
      open: source['open'].slice(-1),
      high: source['high'].slice(-1),
      low: source['low'].slice(-1),
      close: source['close'].slice(-1),
    }
    return gravestonedoji(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
    isGraveStoneDojiPattern,
}
