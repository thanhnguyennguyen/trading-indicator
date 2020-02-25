const sma = require('../indicators/sma.js')
const {crossover, crossunder} = require('../utils/cross.js')
const calculateMA = async (MA_FAST, MA_SLOW, symbol, interval, exchange, isFuture) => {
    try {
        let MA_FAST_VAL = await sma(parseInt(MA_FAST), "close", exchange, symbol, interval, isFuture)
        let MA_SLOW_VAL = await sma(parseInt(MA_SLOW), "close", exchange, symbol, interval, isFuture)
        return {
            fast: MA_FAST_VAL,
            slow: MA_SLOW_VAL
        }

    } catch (err) {
        throw (err)
    }
}

let maFastVal, maSlowVal
const goldenCross = async (MA_FAST, MA_SLOW, symbol, interval, exchange, isFuture = false) => {
    if (maFastVal == undefined || maSlowVal == undefined) {
        let maVal = await calculateMA(MA_FAST, MA_SLOW, symbol, interval, exchange, isFuture)
        maFastVal = maVal.fast
        maSlowVal = maVal.slow
    }

    return crossover(maFastVal, maSlowVal)
}

const deathCross = async (MA_FAST, MA_SLOW, symbol, interval, exchange, isFuture = false) => {
    if (maFastVal == undefined || maSlowVal == undefined) {
        let maVal = await calculateMA(MA_FAST, MA_SLOW, symbol, interval, exchange, isFuture)
        maFastVal = maVal.fast
        maSlowVal = maVal.slow
    }

    return crossunder(maFastVal, maSlowVal)
}

const maCross = async (MA_FAST, MA_SLOW, symbol, interval, exchange, isFuture = false) => {
    return {
        goldenCross: await goldenCross(MA_FAST, MA_SLOW, symbol, interval, exchange, isFuture),
        deathCross: await deathCross(MA_FAST, MA_SLOW, symbol, interval, exchange, isFuture),
    }
}
module.exports = {
    maCross: maCross,
    goldenCross: goldenCross,
    deathCross: deathCross,
}
