const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const stochasticrsi = async (
  k,
  d,
  rsiLength,
  stochasticrsiLength,
  sourceType,
  ex,
  ticker,
  interval,
  isFuture = false
) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let stochasticrsiInput = {
      values: source[sourceType],
      kPeriod: k,
      dPeriod: d,
      stochasticPeriod: stochasticrsiLength,
      rsiPeriod: rsiLength,
    }
    const data = indicators.StochasticRSI.calculate(stochasticrsiInput)
    return { ...data, ohlcv : ohlcv}
  } catch (err) {
    throw err
  }
}
const main = async () => {
  console.log(await stochasticrsi(3, 3, 14, 14, 'close', 'binance', 'BTC/USDT', '1h', false))
}
// main()
module.exports = {
  stochasticrsi,
}
