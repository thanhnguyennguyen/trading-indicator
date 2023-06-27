const indicators = require('technicalindicators')

const ichimokuCloud = async (conversionPeriod, basePeriod, spanPeriod, displacement, input) => {
  try {
    let ichimokuCloudInput = {
      ...input,
      conversionPeriod: conversionPeriod,
      basePeriod: basePeriod,
      spanPeriod: spanPeriod,
      displacement: displacement,
    }
    return await indicators.IchimokuCloud.calculate(ichimokuCloudInput)
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
