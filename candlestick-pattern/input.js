const getOHLCV = require('../indicators/ohlcv.js')
const detachSource = require('../indicators/source.js')

const getCandleStickInput = async (ex, ticker, interval, isFuture = false) => {
  let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
  let source = detachSource(ohlcv)
  return {
    ohlcv: ohlcv,
    input: source,
  }
}
module.exports = {
  getCandleStickInput,
}
