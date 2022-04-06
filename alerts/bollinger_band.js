const { bb } = require('../indicators/bollinger_band.js')
const { ticker } = require('../indicators/ticker.js')
const calculateBollingerBandValue = async (period, stdDev, exchange, symbol, interval, isFuture) => {
  try {
    return await bb(parseInt(period), parseInt(stdDev), 'close', exchange, symbol, interval, isFuture)
  } catch (err) {
    throw err
  }
}
const bbCheck = async (period, stdDev, exchange, symbol, interval, isFuture = false) => {
  let bbVals = await calculateBollingerBandValue(period, stdDev, exchange, symbol, interval, isFuture),
    lastBBVal = bbVals[bbVals.length - 1]
  ;(tick = await ticker(exchange, symbol, isFuture)),
    (price = tick.close),
    (down = price < lastBBVal.lower),
    (up = price > lastBBVal.upper)
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
