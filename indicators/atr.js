const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const atr = async (period, ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let atrInput = {
      high: source['high'],
      low: source['low'],
      close: source['close'],
      period: period,
    }
    const data =  await indicators.atr.calculate(atrInput)
    return { ...data, ohlcv : ohlcv}
  } catch (err) {
    throw err
  }
}
module.exports = {
  atr,
}
