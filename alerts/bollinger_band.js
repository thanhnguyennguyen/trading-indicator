const { bb } = require('../indicators/bollinger_band.js')
const calculateBollingerBandValue = async (period, stdDev, input) => {
  try {
    return await bb(parseInt(period), parseInt(stdDev), 'close', input)
  } catch (err) {
    throw err
  }
}
const bbCheck = async (period, stdDev, input) => {
  let bbVals = await calculateBollingerBandValue(period, stdDev, input),
    lastBBVal = bbVals[bbVals.length - 1]
  ;(price = input.close[input.close.length - 1]), (down = price < lastBBVal.lower), (up = price > lastBBVal.upper)
  return {
    breakOut: down || up,
    band: down ? 'lower' : up ? 'upper' : 'none',
    direction: down ? 'down' : up ? 'up' : 'none',
    price: price,
  }
}

module.exports = {
  bbCheck: bbCheck,
}
