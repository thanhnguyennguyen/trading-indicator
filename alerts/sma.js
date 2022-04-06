const { sma } = require('../indicators/sma.js')
const getOHLCV = require('../indicators/ohlcv.js')
const { crossover, crossunder } = require('../utils/cross.js')
const calculateMA = async (MA_FAST, MA_SLOW, exchange, symbol, interval, isFuture) => {
  try {
    let MA_FAST_VAL = await sma(parseInt(MA_FAST), 'close', exchange, symbol, interval, isFuture)
    let MA_SLOW_VAL = await sma(parseInt(MA_SLOW), 'close', exchange, symbol, interval, isFuture)
    return {
      fast: MA_FAST_VAL,
      slow: MA_SLOW_VAL,
    }
  } catch (err) {
    throw err
  }
}

let maFastVal, maSlowVal
const goldenCross = async (MA_FAST, MA_SLOW, exchange, symbol, interval, isFuture = false) => {
  if (maFastVal == undefined || maSlowVal == undefined) {
    let maVal = await calculateMA(MA_FAST, MA_SLOW, exchange, symbol, interval, isFuture)
    maFastVal = maVal.fast
    maSlowVal = maVal.slow
  }

  return crossover(maFastVal, maSlowVal)
}

const deathCross = async (MA_FAST, MA_SLOW, exchange, symbol, interval, isFuture = false) => {
  if (maFastVal == undefined || maSlowVal == undefined) {
    let maVal = await calculateMA(MA_FAST, MA_SLOW, exchange, symbol, interval, isFuture)
    maFastVal = maVal.fast
    maSlowVal = maVal.slow
  }

  return crossunder(maFastVal, maSlowVal)
}

const maCross = async (MA_FAST, MA_SLOW, exchange, symbol, interval, isFuture = false) => {
  return {
    goldenCross: await goldenCross(MA_FAST, MA_SLOW, exchange, symbol, interval, isFuture),
    deathCross: await deathCross(MA_FAST, MA_SLOW, exchange, symbol, interval, isFuture),
  }
}

const priceCrossSMA = async (period, exchange, symbol, interval, isFuture = false) => {
  let maVal = await sma(parseInt(period), 'close', exchange, symbol, interval, isFuture),
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
  maCross: maCross,
  goldenCross: goldenCross,
  deathCross: deathCross,
  priceCrossSMA: priceCrossSMA,
}
