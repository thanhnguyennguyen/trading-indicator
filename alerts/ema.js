const { ema } = require('../indicators/ema.js')
const getOHLCV = require('../indicators/ohlcv.js')
const { crossover, crossunder } = require('../utils/cross.js')

const calculateEMA = async (EMA_FAST, EMA_SLOW, exchange, symbol, interval, isFuture) => {
  try {
    let EMA_FAST_VAL = await ema(parseInt(EMA_FAST), 'close', exchange, symbol, interval, isFuture)
    let EMA_SLOW_VAL = await ema(parseInt(EMA_SLOW), 'close', exchange, symbol, interval, isFuture)
    return {
      fast: EMA_FAST_VAL,
      slow: EMA_SLOW_VAL,
    }
  } catch (err) {
    throw err
  }
}

//let emaFastVal, emaSlowVal
const egoldenCross = async (EMA_FAST, EMA_SLOW, exchange, symbol, interval, isFuture = false) => {
  var emaFastVal
  var emaSlowVal

  //if (emaFastVal == undefined || emaSlowVal == undefined) {
  let emaVal = await calculateEMA(EMA_FAST, EMA_SLOW, exchange, symbol, interval, isFuture)
  emaFastVal = emaVal.fast
  emaSlowVal = emaVal.slow
  //}

  return crossover(emaFastVal, emaSlowVal)
}

const edeathCross = async (EMA_FAST, EMA_SLOW, exchange, symbol, interval, isFuture = false) => {
  var emaFastVal
  var emaSlowVal
  //if (emaFastVal == undefined || emaSlowVal == undefined) {
  let emaVal = await calculateEMA(EMA_FAST, EMA_SLOW, exchange, symbol, interval, isFuture)
  emaFastVal = emaVal.fast
  emaSlowVal = emaVal.slow
  //}

  return crossunder(emaFastVal, emaSlowVal)
}

const emaCross = async (EMA_FAST, EMA_SLOW, exchange, symbol, interval, isFuture = false) => {
  return {
    egoldenCross: await egoldenCross(EMA_FAST, EMA_SLOW, exchange, symbol, interval, isFuture),
    edeathCross: await edeathCross(EMA_FAST, EMA_SLOW, exchange, symbol, interval, isFuture),
  }
}

const priceCrossEMA = async (period, exchange, symbol, interval, isFuture = false) => {
  let maVal = await ema(parseInt(period), 'close', exchange, symbol, interval, isFuture),
    ohlcv = await getOHLCV(exchange, symbol, interval, isFuture),
    price = [ohlcv[1][3], ohlcv[0][3]],
    up = crossover(price, maVal),
    down = crossunder(price, maVal)
  return {
    cross: up || down,
    direction: up ? 'up' : down ? 'down' : 'none',
  }
}

module.exports = {
  emaCross: emaCross,
  priceCrossEMA: priceCrossEMA,
}
