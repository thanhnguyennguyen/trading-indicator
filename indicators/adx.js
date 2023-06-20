const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

// adxInput ={
//     period
//     high
//     low
//     close
// }

const adxCalculator = (adxInput) => {
  return indicators.ADX.calculate(adxInput)
}

const adx = async (period, ex, ticker, interval, isFuture = false) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let adxInput = {
      high: source['high'],
      low: source['low'],
      close: source['close'],
      period: period,
    }
    const data = adxCalculator(adxInput)
    return { ...data, ohlcv : ohlcv}
  } catch (err) {
    throw err
  }
}
module.exports = {
  adx,
  adxCalculator,
}
