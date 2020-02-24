const sma = require('../indicators/sma.js')
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
const crossover = (val1, val2) => {
    return (val1[val1.length - 2] < val2[val2.length - 2]) && (val1[val1.length - 1] >= val2[val2.length - 1])
}
const crossunder = (val1, val2) => {
    return (val1[val1.length - 2] > val2[val2.length - 2]) && (val1[val1.length - 1] <= val2[val2.length - 1])
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

module.exports = {
    goldenCross: goldenCross,
    deathCross: deathCross,
}
