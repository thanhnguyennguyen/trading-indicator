const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const ichimokuCloud = async (
  conversionPeriod,
  basePeriod,
  spanPeriod,
  displacement,
  ex,
  ticker,
  interval,
  isFuture = false
) => {
  try {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let ichimokuCloudInput = {
      high: source['high'],
      low: source['low'],
      conversionPeriod: conversionPeriod,
      basePeriod: basePeriod,
      spanPeriod: spanPeriod,
      displacement: displacement,
    }
    const data = indicators.IchimokuCloud.calculate(ichimokuCloudInput)
    return { ...data, ohlcv : ohlcv}
  } catch (err) {
    throw err
  }
}
const main = async () => {
  console.log(await ichimokuCloud(9, 26, 52, 26, 'binance', 'BTC/USDT', '1h', false))
}
// main()
module.exports = {
  ichimokuCloud,
}
