const rsi = require('./indicators/rsi.js')
const sma = require('./indicators/sma.js')
const bb = require('./indicators/bollinger_band.js')
const macd = require('./indicators/macd.js')
module.exports = {
    rsi: rsi,
    sma: sma,
    bb: bb,
    macd: macd,
}
const main = async () => {
    console.log(await rsi(14, "close", "binance", "BTC/USDT", "15m", true))

    let smaData = await sma(8, "close", "binance", "BTC/USDT", "15m", true)
    console.log(smaData[smaData.length - 1])

    let bbData = await bb(50, 2, "close", "binance", "BTC/USDT", "15m", true)
    console.log(bbData[bbData.length - 2])

    let macdData = await macd(12, 26, 9, "close", "binance", "BTC/USDT", "15m", true)
    console.log(macdData[macdData.length - 2])
}
main()
