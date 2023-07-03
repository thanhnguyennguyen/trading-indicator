const { sma } = require('../indicators/sma.js')
const { vwap } = require('../indicators/vwap.js')
const { crossover, crossunder } = require('../utils/cross.js')
const calculateMA = async (MA_FAST, MA_SLOW, input) => {
  try {
    let MA_FAST_VAL = await sma(parseInt(MA_FAST), 'close', input)
    let MA_SLOW_VAL = await sma(parseInt(MA_SLOW), 'close', input)
    return {
      fast: MA_FAST_VAL,
      slow: MA_SLOW_VAL,
    }
  } catch (err) {
    throw err
  }
}

let maFastVal, maSlowVal
const goldenCross = async (MA_FAST, MA_SLOW, input) => {
  if (maFastVal == undefined || maSlowVal == undefined) {
    let maVal = await calculateMA(MA_FAST, MA_SLOW, input)
    maFastVal = maVal.fast
    maSlowVal = maVal.slow
  }

  return crossover(maFastVal, maSlowVal)
}

const deathCross = async (MA_FAST, MA_SLOW, input) => {
  if (maFastVal == undefined || maSlowVal == undefined) {
    let maVal = await calculateMA(MA_FAST, MA_SLOW, input)
    maFastVal = maVal.fast
    maSlowVal = maVal.slow
  }

  return crossunder(maFastVal, maSlowVal)
}

const maCross = async (MA_FAST, MA_SLOW, input) => {
  return {
    goldenCross: await goldenCross(MA_FAST, MA_SLOW, input),
    deathCross: await deathCross(MA_FAST, MA_SLOW, input),
  }
}

const priceCrossSMA = async (period, input) => {
  let maVal = await sma(parseInt(period), 'close', input),
    price = input.close.slice(-2),
    up = crossover(price, maVal),
    down = crossunder(price, maVal)
  return {
    cross: up || down,
    direction: up ? 'up' : down ? 'down' : 'none',
  }
}

const vwapCrossSMA = async (period, input) => {
  let vwap = await vwap(input)
  let maVal = await sma(parseInt(period), 'close', input),
    price = vwap.slice(-2),
    up = crossover(price, maVal),
    down = crossunder(price, maVal)
  return {
    cross: up || down,
    direction: up ? 'up' : down ? 'down' : 'none',
  }
}

module.exports = {
  maCross,
  goldenCross,
  deathCross,
  priceCrossSMA,
  vwapCrossSMA,
}
