const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')

const getDetachSourceFromOHLCV = async (ex, ticker, interval, isFuture = false) => {
  let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
  let source = detachSource(ohlcv)
  return {
    ohlcv: ohlcv,
    input: source,
  }
}
module.exports = {
  getDetachSourceFromOHLCV,
}
