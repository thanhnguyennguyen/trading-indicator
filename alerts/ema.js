const { ema } = require('../indicators/ema.js')
const { crossover, crossunder } = require('../utils/cross.js')

const calculateEMA = async (EMA_FAST, EMA_SLOW, input) => {
  try {
    let EMA_FAST_VAL = await ema(parseInt(EMA_FAST), 'close', input)
    let EMA_SLOW_VAL = await ema(parseInt(EMA_SLOW), 'close', input)
    return {
      fast: EMA_FAST_VAL,
      slow: EMA_SLOW_VAL,
    }
  } catch (err) {
    throw err
  }
}

//let emaFastVal, emaSlowVal
const egoldenCross = async (EMA_FAST, EMA_SLOW, input) => {
  var emaFastVal
  var emaSlowVal

  //if (emaFastVal == undefined || emaSlowVal == undefined) {
  let emaVal = await calculateEMA(EMA_FAST, EMA_SLOW, input)
  emaFastVal = emaVal.fast
  emaSlowVal = emaVal.slow
  //}

  return crossover(emaFastVal, emaSlowVal)
}

const edeathCross = async (EMA_FAST, EMA_SLOW, input) => {
  var emaFastVal
  var emaSlowVal
  //if (emaFastVal == undefined || emaSlowVal == undefined) {
  let emaVal = await calculateEMA(EMA_FAST, EMA_SLOW, input)
  emaFastVal = emaVal.fast
  emaSlowVal = emaVal.slow
  //}

  return crossunder(emaFastVal, emaSlowVal)
}

const emaCross = async (EMA_FAST, EMA_SLOW, input) => {
  return {
    egoldenCross: await egoldenCross(EMA_FAST, EMA_SLOW, input),
    edeathCross: await edeathCross(EMA_FAST, EMA_SLOW, input),
  }
}

const priceCrossEMA = async (period, input) => {
  let maVal = await ema(parseInt(period), 'close', input),
    price = input.slice(-2),
    up = crossover(price, maVal),
    down = crossunder(price, maVal)
  return {
    cross: up || down,
    direction: up ? 'up' : down ? 'down' : 'none',
  }
}

const vwapCrossEMA = async (period, input) => {
  let vwap = await vwap(input)
  let maVal = await ema(parseInt(period), 'close', input),
    price = vwap.slice(-2),
    up = crossover(price, maVal),
    down = crossunder(price, maVal)
  return {
    cross: up || down,
    direction: up ? 'up' : down ? 'down' : 'none',
  }
}

module.exports = {
  emaCross,
  priceCrossEMA,
  vwapCrossEMA,
}
