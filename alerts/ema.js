const ema = require('../indicators/ema.js')
const getOHLCV = require('../indicators/ohlcv.js')
const {
    crossover,
    crossunder
} = require('../utils/cross.js')

const priceCrossEMA = async (period, exchange, symbol, interval, isFuture = false) => {
    let maVal = await ema(parseInt(period), "close", exchange, symbol, interval, isFuture),
        ohlcv = await getOHLCV(exchange, symbol, interval, isFuture),
        price = [ohlcv[1][3], ohlcv[0][3]],
        up = crossover(price, maVal),
        down = crossunder(price, maVal)
    return {
        "cross": up || down,
        "direction": up ? "up" : (down ? "down" : "none"),
    }
}

module.exports = {
    priceCrossEMA: priceCrossEMA,
}