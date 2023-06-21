const { rsi } = require('../indicators/rsi.js')
const calculateRSIValue = async (period, exchange, symbol, interval, isFuture) => {
  try {
    return await rsi(parseInt(period), 'close', exchange, symbol, interval, isFuture)
  } catch (err) {
    throw err
  }
}
const rsiCheck = async (
  period,
  overBoughtThreshold,
  overSoldThreshold,
  exchange,
  symbol,
  interval,
  isFuture = false
) => {
  let rsiVals = await calculateRSIValue(period, exchange, symbol, interval, isFuture),
    rsiVal = rsiVals[rsiVals.length - 1]
    console.log('RSIVals', rsiVals)
    console.log('RSI Last', rsiVal)
  return {
    overBought: rsiVal >= overBoughtThreshold,
    overSold: rsiVal <= overSoldThreshold,
    rsiVal: rsiVal,
  }
}

module.exports = {
  rsiCheck: rsiCheck,
}
