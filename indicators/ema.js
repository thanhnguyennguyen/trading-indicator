const getOHLCV = require('./ohlcv.js')
const detachSource = require('./source.js')
const indicators = require('technicalindicators')

const ema = async (emaLength, sourceType, ex, ticker, interval, isFuture = false) => {
    let ohlcv = await getOHLCV(ex, ticker, interval, isFuture)
    let source = detachSource(ohlcv)
    let emaInput = {
        values: source[sourceType],
        period: emaLength
    }
    return await indicators.EMA.calculate(emaInput)
}
module.exports = ema
